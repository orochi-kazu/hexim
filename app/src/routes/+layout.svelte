<script>
  import { browser } from '$app/environment'
  import favicon from '$lib/assets/favicon.svg'
  import { themes } from '$lib/core/settings.svelte'
  import { settings } from '$lib/deps'

  const { children } = $props()

  if (browser) {
    let preferDark = window.matchMedia('(prefers-color-scheme: dark)')
    settings.theme.device = preferDark ? themes.dark : themes.light

    preferDark.addEventListener('change', (event) => {
      settings.theme.device = event.matches ? themes.dark : themes.light
    })
  }

  let styleTheme = $derived.by(() =>
    settings.theme.selected === themes.auto ? settings.theme.device : settings.theme.selected,
  )
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div id="game" class={styleTheme}>{@render children()}</div>

<style lang="scss">
  :global(body) {
    padding: 0;
    margin: 0;
    display: flex;
  }
  :global(div#game-wrapper) {
    flex-grow: 1;
    display: flex;
  }
  div#game {
    min-height: 100vh;
    flex-grow: 1;
    &.light {
      background-color: mintcream;
      color: black;
    }
    &.dark {
      background-color: black;
      color: mintcream;
    }
  }
</style>
