<script>
  import palette from './palette.svelte'
</script>

<style lang="scss">
  :global(:root) {
    --fg-dark: var(--taupe-100);
    --fg-light: var(--taupe-800);

    --bg-dark: var(--neutral-900);
    --bg-light: var(--neutral-100);

    --fg-ui-dark: var(--taupe-100);
    --fg-ui-light: var(--taupe-900);
    --fg-ui-focus-dark: var(--violet-300);
    --fg-ui-focus-light: var(--amber-800);

    --bg-ui-dark: var(--slate-900);
    --bg-ui-light: var(--zinc-100);
    --bg-ui-hover-dark: var(--slate-800);
    --bg-ui-hover-light: var(--zinc-200);
    --bg-ui-focus-dark: var(--slate-700);
    --bg-ui-focus-light: var(--zinc-300);

    --bg-button-border-dark: var(--slate-600);
    --bg-button-border-light: var(--zinc-300);
    --bg-button-highlight-dark: var(--slate-400);
    --bg-button-highlight-light: var(--zinc-100);
    --bg-button-tint-dark: var(--slate-500);
    --bg-button-tint-light: var(--zinc-200);
    --bg-button-shade-dark: var(--slate-700);
    --bg-button-shade-light: var(--zinc-400);
    --bg-button-lowlight-dark: var(--slate-800);
    --bg-button-lowlight-light: var(--zinc-500);

    --bg-maptile-empty-dark: var(--mauve-900);
    --bg-maptile-empty-light: var(--mauve-300);

    --bg-maptile-mountain-hi-dark: var(--taupe-700);
    --bg-maptile-mountain-mid-dark: var(--taupe-800);
    --bg-maptile-mountain-lo-dark: var(--taupe-900);
    --bg-maptile-mountain-hi-light: var(--yellow-700);
    --bg-maptile-mountain-mid-light: var(--yellow-800);
    --bg-maptile-mountain-lo-light: var(--yellow-900);

    --bg-maptile-water-hi-dark: var(--cyan-800);
    --bg-maptile-water-mid-dark: var(--cyan-900);
    --bg-maptile-water-lo-dark: var(--cyan-950);
    --bg-maptile-water-hi-light: var(--sky-500);
    --bg-maptile-water-mid-light: var(--sky-600);
    --bg-maptile-water-lo-light: var(--sky-700);

    --bg-maptile-desert-hi-dark: var(--yellow-500);
    --bg-maptile-desert-mid-dark: var(--yellow-600);
    --bg-maptile-desert-lo-dark: var(--yellow-700);
    --bg-maptile-desert-hi-light: var(--amber-100);
    --bg-maptile-desert-mid-light: var(--amber-200);
    --bg-maptile-desert-lo-light: var(--amber-300);

    --bg-maptile-plain-hi-dark: var(--lime-500);
    --bg-maptile-plain-mid-dark: var(--lime-600);
    --bg-maptile-plain-lo-dark: var(--lime-700);
    --bg-maptile-plain-hi-light: var(--lime-300);
    --bg-maptile-plain-mid-light: var(--lime-400);
    --bg-maptile-plain-lo-light: var(--lime-500);

    --bg-maptile-forest-hi-dark: var(--green-700);
    --bg-maptile-forest-mid-dark: var(--green-800);
    --bg-maptile-forest-lo-dark: var(--green-900);
    --bg-maptile-forest-hi-light: var(--green-500);
    --bg-maptile-forest-mid-light: var(--green-600);
    --bg-maptile-forest-lo-light: var(--green-700);

    --bg-maptile-city-hi-dark: var(--zinc-500);
    --bg-maptile-city-mid-dark: var(--zinc-600);
    --bg-maptile-city-lo-dark: var(--zinc-700);
    --bg-maptile-city-hi-light: var(--neutral-300);
    --bg-maptile-city-mid-light: var(--neutral-400);
    --bg-maptile-city-lo-light: var(--neutral-500);

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

      --bg-maptile-empty: var(--bg-maptile-empty-dark);
      --bg-maptile-mountain-hi: var(--bg-maptile-mountain-hi-dark);
      --bg-maptile-mountain-mid: var(--bg-maptile-mountain-mid-dark);
      --bg-maptile-mountain-lo: var(--bg-maptile-mountain-lo-dark);
      --bg-maptile-water-hi: var(--bg-maptile-water-hi-dark);
      --bg-maptile-water-mid: var(--bg-maptile-water-mid-dark);
      --bg-maptile-water-lo: var(--bg-maptile-water-lo-dark);
      --bg-maptile-desert-hi: var(--bg-maptile-desert-hi-dark);
      --bg-maptile-desert-mid: var(--bg-maptile-desert-mid-dark);
      --bg-maptile-desert-lo: var(--bg-maptile-desert-lo-dark);
      --bg-maptile-plain-hi: var(--bg-maptile-plain-hi-dark);
      --bg-maptile-plain-mid: var(--bg-maptile-plain-mid-dark);
      --bg-maptile-plain-lo: var(--bg-maptile-plain-lo-dark);
      --bg-maptile-forest-hi: var(--bg-maptile-forest-hi-dark);
      --bg-maptile-forest-mid: var(--bg-maptile-forest-mid-dark);
      --bg-maptile-forest-lo: var(--bg-maptile-forest-lo-dark);
      --bg-maptile-city-hi: var(--bg-maptile-city-hi-dark);
      --bg-maptile-city-mid: var(--bg-maptile-city-mid-dark);
      --bg-maptile-city-lo: var(--bg-maptile-city-lo-dark);
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

      --bg-maptile-empty: var(--bg-maptile-empty-light);
      --bg-maptile-mountain-hi: var(--bg-maptile-mountain-hi-light);
      --bg-maptile-mountain-mid: var(--bg-maptile-mountain-mid-light);
      --bg-maptile-mountain-lo: var(--bg-maptile-mountain-lo-light);
      --bg-maptile-water-hi: var(--bg-maptile-water-hi-light);
      --bg-maptile-water-mid: var(--bg-maptile-water-mid-light);
      --bg-maptile-water-lo: var(--bg-maptile-water-lo-light);
      --bg-maptile-desert-hi: var(--bg-maptile-desert-hi-light);
      --bg-maptile-desert-mid: var(--bg-maptile-desert-mid-light);
      --bg-maptile-desert-lo: var(--bg-maptile-desert-lo-light);
      --bg-maptile-plain-hi: var(--bg-maptile-plain-hi-light);
      --bg-maptile-plain-mid: var(--bg-maptile-plain-mid-light);
      --bg-maptile-plain-lo: var(--bg-maptile-plain-lo-light);
      --bg-maptile-forest-hi: var(--bg-maptile-forest-hi-light);
      --bg-maptile-forest-mid: var(--bg-maptile-forest-mid-light);
      --bg-maptile-forest-lo: var(--bg-maptile-forest-lo-light);
      --bg-maptile-city-hi: var(--bg-maptile-city-hi-light);
      --bg-maptile-city-mid: var(--bg-maptile-city-mid-light);
      --bg-maptile-city-lo: var(--bg-maptile-city-lo-light);
    }

    :global(div.themeable) {
      background-color: var(--bg);
      color: var(--fg);
    }
  }
</style>
