<script>
  import Text from './Text.svelte'
  const { children, title } = $props()
</script>

<div class="container">
  {#if title}
    <div class="container-title"><Text size="large">{title}</Text></div>
  {/if}
  {@render children()}
</div>

<style lang="scss">
  .container {
    padding: var(--padding-margin-xsmall);
    margin: var(--padding-margin-xxxlarge) 0;
    background-color: var(--bg-ui);
  }

  .container-title {
    border-bottom: var(--border-width-small) solid var(--bg-ui-focus);
    padding: 0 var(--padding-margin-small);
    padding-bottom: var(--padding-margin-medium);
    margin-bottom: var(--padding-margin-xsmall);
  }
</style>
