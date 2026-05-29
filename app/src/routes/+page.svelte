<script>
  import { m as text } from '$lib/paraglide/messages'
  import ThemeSelector from '$lib/feat/settings/ThemeSelector.svelte'
  import LocaleSelector from '$lib/feat/settings/LocaleSelector.svelte'
</script>

<h1>{text.game_title()}</h1>

<ThemeSelector />
<LocaleSelector />
