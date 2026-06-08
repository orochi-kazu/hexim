<script>
  import palette from './palette.svelte'
</script>

<style lang="scss">
  :global(:root) {
    --fg-dark: var(--stone-100);
    --fg-light: var(--stone-900);

    --bg-dark: var(--neutral-900);
    --bg-light: var(--neutral-100);

    --fg-ui-dark: var(--stone-100);
    --fg-ui-light: var(--stone-900);
    --fg-ui-focus-dark: var(--amber-300);
    --fg-ui-focus-light: var(--amber-500);

    --bg-ui-dark: var(--amber-900);
    --bg-ui-light: var(--amber-100);
    --bg-ui-hover-dark: var(--amber-800);
    --bg-ui-hover-light: var(--amber-200);
    --bg-ui-focus-dark: var(--amber-700);
    --bg-ui-focus-light: var(--amber-300);

    --bg-button-border-dark: var(--stone-600);
    --bg-button-border-light: var(--stone-300);
    --bg-button-highlight-dark: var(--stone-400);
    --bg-button-highlight-light: var(--stone-100);
    --bg-button-tint-dark: var(--stone-500);
    --bg-button-tint-light: var(--stone-200);
    --bg-button-shade-dark: var(--stone-700);
    --bg-button-shade-light: var(--stone-400);
    --bg-button-lowlight-dark: var(--stone-800);
    --bg-button-lowlight-light: var(--stone-500);

    :global(.dark) {
      --fg: var(--fg-dark);
      --bg: var(--bg-dark);

      --fg-ui: var(--fg-ui-dark);
      --fg-ui-focus: var(--fg-ui-focus-dark);
      --bg-ui: var(--bg-ui-dark);
      --bg-ui-hover: var(--bg-ui-hover-dark);
      --bg-ui-focus: var(--bg-ui-focus-dark);

      --bg-button-border: var(--bg-button-border-dark);
      --bg-button-highlight: var(--bg-button-highlight-dark);
      --bg-button-tint: var(--bg-button-tint-dark);
      --bg-button-shade: var(--bg-button-shade-dark);
      --bg-button-lowlight: var(--bg-button-lowlight-dark);
    }
    :global(.light) {
      --fg: var(--fg-light);
      --bg: var(--bg-light);

      --fg-ui: var(--fg-ui-light);
      --fg-ui-focus: var(--fg-ui-focus-light);
      --bg-ui: var(--bg-ui-light);
      --bg-ui-hover: var(--bg-ui-hover-light);
      --bg-ui-focus: var(--bg-ui-focus-light);

      --bg-button-border: var(--bg-button-border-light);
      --bg-button-highlight: var(--bg-button-highlight-light);
      --bg-button-tint: var(--bg-button-tint-light);
      --bg-button-shade: var(--bg-button-shade-light);
      --bg-button-lowlight: var(--bg-button-lowlight-light);
    }

    :global(div.themeable) {
      background-color: var(--bg);
      color: var(--fg);
    }
  }
</style>
