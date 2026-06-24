<script>
  import style from './style.svelte'

  const { children, href } = $props()
</script>

<a {href}>{@render children()}</a>

<style lang="scss">
  a {
    color: var(--fg-ui);

    &:active,
    &:focus,
    &:target,
    &:visited {
      color: var(--fg-ui-focus);
    }
    &:hover {
      color: var(--fg-ui);
    }
  }
</style>
