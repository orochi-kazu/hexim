<script>
  import style from './style.svelte'
  export const titleSize = Object.freeze({
    large: Symbol('l'),
    medium: Symbol('m'),
  })
  const sanitiseSize = (textSize) => titleSize[textSize] ?? titleSize.medium

  export const titleAlignment = Object.freeze({
    start: Symbol('start'),
    centre: Symbol('centre'),
    end: Symbol('end'),
  })
  const sanitiseAlignment = (textAlign) => titleAlignment[textAlign] ?? titleAlignment.start

  const { size, align, children } = $props()
  const titleClass = $derived.by(() => [
    sanitiseSize(size).description,
    sanitiseAlignment(align).description,
  ])
</script>

<h1 class={titleClass}>{@render children?.()}</h1>

<style lang="scss">
  h1 {
    font-family: var(--font-title);

    &.l {
      font-size: var(--font-size-xxlarge);
    }
    &.m {
      font-size: var(--font-size-xlarge);
    }

    &.start {
      text-align: start;
    }
    &.centre {
      text-align: center;
    }
    &.end {
      text-align: end;
    }
  }
</style>
