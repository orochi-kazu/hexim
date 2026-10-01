<script>
  import palette from './palette.svelte'
</script>

<style lang="scss">
  :global(:root) {
    --fg: light-dark(var(--taupe-800), var(--taupe-200));
    --bg: light-dark(var(--neutral-100), var(--neutral-900));

    --fg-ui: light-dark(var(--taupe-900), var(--taupe-100));
    --fg2-ui: light-dark(var(--yellow-900), var(--indigo-200));
    --fg-ui-focus: light-dark(var(--amber-800), var(--violet-300));

    --bg-ui: light-dark(var(--zinc-100), var(--slate-900));
    --bg-ui-hover: light-dark(var(--zinc-200), var(--slate-800));
    --bg-ui-focus: light-dark(var(--zinc-300), var(--slate-700));

    --bg-button-border: light-dark(var(--zinc-300), var(--slate-600));
    --bg-button-highlight: light-dark(var(--zinc-100), var(--slate-400));
    --bg-button-tint: light-dark(var(--zinc-200), var(--slate-500));
    --bg-button-shade: light-dark(var(--zinc-400), var(--slate-700));
    --bg-button-lowlight: light-dark(var(--zinc-500), var(--slate-800));

    --bg-maptile-empty: light-dark(var(--mauve-300), var(--mauve-900));

    --bg-maptile-mountain-hi: light-dark(var(--yellow-700), var(--taupe-700));
    --bg-maptile-mountain-mid: light-dark(var(--yellow-800), var(--taupe-800));
    --bg-maptile-mountain-lo: light-dark(var(--yellow-900), var(--taupe-900));

    --bg-maptile-water-hi: light-dark(var(--sky-500), var(--cyan-800));
    --bg-maptile-water-mid: light-dark(var(--sky-600), var(--cyan-900));
    --bg-maptile-water-lo: light-dark(var(--sky-700), var(--cyan-950));

    --bg-maptile-desert-hi: light-dark(var(--amber-100), var(--yellow-500));
    --bg-maptile-desert-mid: light-dark(var(--amber-200), var(--yellow-600));
    --bg-maptile-desert-lo: light-dark(var(--amber-300), var(--yellow-700));

    --bg-maptile-plain-hi: light-dark(var(--lime-300), var(--lime-500));
    --bg-maptile-plain-mid: light-dark(var(--lime-400), var(--lime-600));
    --bg-maptile-plain-lo: light-dark(var(--lime-500), var(--lime-700));

    --bg-maptile-forest-hi: light-dark(var(--green-500), var(--green-700));
    --bg-maptile-forest-mid: light-dark(var(--green-600), var(--green-800));
    --bg-maptile-forest-lo: light-dark(var(--green-700), var(--green-900));

    --bg-maptile-city-hi: light-dark(var(--neutral-300), var(--zinc-500));
    --bg-maptile-city-mid: light-dark(var(--neutral-400), var(--zinc-600));
    --bg-maptile-city-lo: light-dark(var(--neutral-500), var(--zinc-700));

    :global(div.themeable) {
      background-color: var(--bg);
      color: var(--fg);
    }
  }
</style>
