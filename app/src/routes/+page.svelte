<script>
  import { locales, setLocale } from '$lib/paraglide/runtime'
  import { m as text } from '$lib/paraglide/messages'
  import ThemeSelector from '$lib/feat/settings/ThemeSelector.svelte'
</script>

<h1>{text.game_title()}</h1>

{#each locales as lang}
  <button onclick={() => setLocale(lang)}>{lang}</button>
{/each}

<ThemeSelector />
