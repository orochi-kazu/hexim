<script>
  import style from './style.svelte'

  export const textSize = Object.freeze({
    large: Symbol('l'),
    medium: Symbol('m'),
    small: Symbol('s'),
  })
  const sanitiseSize = (text) => textSize[text] ?? textSize.medium

  const { size, children } = $props()
  const textClass = $derived.by(() => sanitiseSize(size).description)
</script>

<span class={textClass}>{@render children?.()}</span>

<style lang="scss">
  span {
    line-height: var(--text-leading);
    font-family: var(--font-text);
    &.l {
      font-size: var(--font-size-large);
    }
    &.m {
      font-size: var(--font-size-medium);
    }
    &.s {
      font-size: var(--font-size-small);
    }
  }
</style>
