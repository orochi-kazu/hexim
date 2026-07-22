<script>
  import Text from './Text.svelte'
  const { children, title, actions } = $props()
</script>

{#snippet divider()}
  <div class="divider"></div>
{/snippet}

<div class="container">
  {#if title}
    <div class="container-title"><Text size="large">{title}</Text></div>
    {@render divider()}
  {/if}
  {@render children()}
  {#if actions}
    {@render divider()}
    {@render actions()}
  {/if}
</div>

<style lang="scss">
  .container {
    padding: var(--padding-margin-xsmall);
    margin: var(--padding-margin-xxxlarge) 0;
    background-color: var(--bg-ui);
  }

  .container-title {
    padding: 0 var(--padding-margin-small);
    margin-bottom: var(--padding-margin-xsmall);
  }

  .divider {
    border-top: var(--border-width-small) solid var(--bg-ui-focus);
    padding-bottom: var(--padding-margin-medium);
  }
</style>
