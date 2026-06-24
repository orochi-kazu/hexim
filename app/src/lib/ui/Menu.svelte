<script>
  import { text } from '$lib/feat/text'
  import Container from './Container.svelte'
  import Text from './Text.svelte'

  const { title, items, isShowingSubmenu } = $props()

  const itemElements = $state([])
  let selectedIndex = $state(0)

  const select = (index) => {
    selectedIndex = (index + items.length) % items.length
    itemElements[selectedIndex]?.focus()
  }
  const selectNext = () => select(selectedIndex + 1)
  const selectPrevious = () => select(selectedIndex - 1)
  const toggleNext = () => items[selectedIndex].ontogglenext?.()
  const togglePrevious = () => items[selectedIndex].ontoggleprev?.()
  const toggleChoose = (index) => items[selectedIndex].onchooseoption?.(index)

  let tabbingMode = $state(false)
  const tabbingOn = () => (tabbingMode = true)
  const tabbingOff = () => (tabbingMode = false)

  const defaultChooseLog = () => {}
  // console.debug(`chose ${selectedIndex}: ${items[selectedIndex].label}`)

  const onChoose = $derived(
    items[selectedIndex].onchoose ??
      (!items[selectedIndex].options?.length ? items[selectedIndex].ontogglenext : undefined) ??
      defaultChooseLog,
  )

  const onkeydown = (event) => {
    const ifTabbingStopAnd = (func) => () => {
      tabbingMode = false
      func()
    }
    const ifNotTabbing = (func) => () => {
      if (!tabbingMode) func()
    }
    const action =
      {
        ArrowDown: ifTabbingStopAnd(selectNext),
        ArrowUp: ifTabbingStopAnd(selectPrevious),
        ArrowRight: ifTabbingStopAnd(toggleNext),
        ArrowLeft: ifTabbingStopAnd(togglePrevious),
        ' ': ifNotTabbing(onChoose),
        Enter: ifNotTabbing(onChoose),
        Tab: tabbingOn,
      }[event.key] ?? (() => console.debug({ key: event.key }))
    action()
  }

  const onFocus = (index) => (event) => {
    select(index)
  }
  const onClick = (index) => (event) => {
    select(index)
    if (!items[selectedIndex].options?.length) {
      onChoose()
    }
  }
  const onChooseOption = (index, optionIndex) => (event) => {
    select(index)
    toggleChoose(optionIndex)
  }

  $effect(() => {
    if (!isShowingSubmenu) {
      select(selectedIndex)
    }
  })
</script>

{#snippet itemContent(item, i)}
  <div>
    {#if item.type === 'toggle' && item.options?.length}
      <label for={item.label} class="menu-item-label">
        <Text>{item.label}</Text>
      </label>
      <fieldset id={item.label}>
        <Text>{text.menu.common.optionsPrefix()}</Text>
        {#each item.options as option, oi}
          <input
            type="radio"
            id={option}
            name={option}
            value={option}
            onchange={onChooseOption(i, oi)}
            checked={option === item.value}
          />
          <Text>
            <label for={option} class={['menu-option', option === item.value ? 'selected' : '']}>
              {option}
            </label>
          </Text>
        {/each}
        <Text>{text.menu.common.optionsSuffix()}</Text>
      </fieldset>
    {:else if item.type === 'toggle'}
      <Text>{item.label}</Text>
      <Text>
        {text.menu.common.optionsPrefix()}
        {item.value}
        {text.menu.common.optionsSuffix()}
      </Text>
    {:else}
      <Text>{item.label}</Text>
    {/if}
  </div>
  {#if item.note}
    <Text>{text.menu.common.note({ message: item.note })}</Text>
  {/if}
{/snippet}

<Container {title}>
  {#each items as item, i}
    {#if isShowingSubmenu}
      <div>{@render itemContent(item, i)}</div>
    {:else if item.type === 'link'}
      <a
        href={item.path}
        bind:this={itemElements[i]}
        class="menu-item"
        tabindex="0"
        onclick={onClick(i)}
        onfocus={onFocus(i)}
        {onkeydown}
        role="menuitem"
      >
        {@render itemContent(item, i)}
      </a>
    {:else}
      <div
        bind:this={itemElements[i]}
        class={['menu-item', selectedIndex === i ? 'selected' : undefined]}
        tabindex="0"
        onclick={onClick(i)}
        onfocus={onFocus(i)}
        {onkeydown}
        role="menuitem"
      >
        {@render itemContent(item, i)}
      </div>
    {/if}
  {/each}
</Container>

<style lang="scss">
  :root {
    --label-min-width: 6rem;
  }

  a.menu-item {
    text-decoration: none;
    color: var(--fg-ui);

    &:active,
    &:focus,
    &:hover,
    &:target,
    &:visited {
      color: var(--fg-ui);
    }
  }
  .menu-item {
    display: flex; /* force <a/> to block for bgcolor */
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    padding: 0 var(--padding-margin-small);

    &:focus-visible {
      outline: none;
    }
    &:hover {
      background-color: var(--bg-ui-hover);
    }
    &.selected,
    &:active,
    &:focus,
    &:focus-visible {
      background-color: var(--bg-ui-focus);
    }
    min-width: var(--min-tappable-size);
    min-height: var(--min-tappable-size);
  }
  div.menu-item {
    & > :first-child {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
  }

  .menu-item-label {
    display: inline-block;
    min-width: var(--label-min-width);
  }

  fieldset {
    border: none;
    padding: 0;
  }
  input[type='radio'] {
    appearance: none;
    margin: 0;
  }
  .menu-option {
    margin: 0 var(--padding-margin-xsmall);
    padding: var(--padding-margin-xxsmall) var(--padding-margin-small);

    outline: var(--border-width-small) solid;
    border-radius: var(--border-width-medium);

    &.selected {
      cursor: default;
      outline-color: var(--fg-ui);
    }
    &:not(.selected) {
      cursor: pointer;
      outline-color: var(--bg-ui);

      &:hover {
        outline-color: var(--fg-ui-focus);
      }
    }
  }
</style>
