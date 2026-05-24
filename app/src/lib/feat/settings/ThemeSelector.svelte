<script>
  import { getContext, onMount } from 'svelte'
  import { themes } from '$lib/core/settings.svelte'
  import { deps } from '$lib/deps'

  let theme = () => deps.settings.theme
  let selectedTheme = $state('dunno')

  onMount(() => {
    selectedTheme = theme().get()
  })

  const selectNextTheme = () => {
    selectedTheme = {
      [themes.auto]: themes.light,
      [themes.light]: themes.dark,
      [themes.dark]: themes.auto,
    }[selectedTheme]
    theme().set(selectedTheme)
  }
</script>

<button onclick={selectNextTheme}
  >{{
    [themes.auto]: '✨ Auto',
    [themes.light]: '☀️ Light',
    [themes.dark]: '🌙 Dark',
  }[selectedTheme]}</button
>
