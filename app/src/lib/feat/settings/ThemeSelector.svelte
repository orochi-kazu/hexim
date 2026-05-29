<script>
  import { themes } from '$lib/core/settings.svelte'
  import { settings } from '$lib/deps'

  const selectNextTheme = () => {
    settings.theme.selected = {
      [themes.auto]: themes.light,
      [themes.light]: themes.dark,
      [themes.dark]: themes.auto,
    }[settings.theme.selected]
  }
</script>

<button onclick={selectNextTheme}>
  {{
    [themes.auto]: '✨ Auto',
    [themes.light]: '☀️ Light',
    [themes.dark]: '🌙 Dark',
  }[settings.theme.selected]}
</button>
