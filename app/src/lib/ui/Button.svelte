<script>
  import style from './style.svelte'

  const { onclick, children } = $props()
</script>

<button {onclick}>{@render children?.()}</button>

<style lang="scss">
  button {
    border: var(--border-width-small) solid;
    padding: var(--padding-margin-medium) var(--padding-margin-xxlarge);
    border-radius: var(--corner-radius-medium);
    font-family: var(--font-text);
    font-weight: var(--font-weight-heavy);
    font-size: var(--font-size-small);
    min-width: var(--min-tappable-size);
    min-height: var(--min-tappable-size);
  }

  button {
    border-color: var(--bg-button-border);
    background-image: linear-gradient(to bottom, var(--bg-button-tint), var(--bg-button-shade));
    color: var(--fg-ui);

    &:hover {
      background-image: linear-gradient(
        to bottom,
        var(--bg-button-highlight),
        var(--bg-button-tint) 15%,
        var(--bg-button-shade) 85%,
        var(--bg-button-lowlight)
      );
    }
    &:active {
      background-image: linear-gradient(to bottom, var(--bg-button-border), var(--bg-button-shade));
    }
    &:focus {
      outline: var(--border-width-medium) solid var(--fg-ui-focus);
    }
  }
</style>
