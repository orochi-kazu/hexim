<script>
  import { browser } from '$app/environment'
  import { asset } from '$app/paths'
  import { themes } from '$lib/core/settings.svelte'
  import { settings } from '$lib/deps'
  import { setColorSchemeVar } from '$lib/feat/settings/theme.svelte'
  import style from '$lib/ui/style.svelte'

  const { children } = $props()

  if (browser) {
    const setDeviceThemeIsDark = (isDark) => {
      settings.theme.device = isDark ? themes.dark : themes.light
    }

    let preferDark = window.matchMedia('(prefers-color-scheme: dark)')
    setDeviceThemeIsDark(preferDark)

    preferDark.addEventListener('change', (event) => setDeviceThemeIsDark(event.matches))

    setColorSchemeVar()
  }
</script>

<svelte:head>
  <link rel="icon" href={asset('/favicon.svg')} />
</svelte:head>

{@render children()}

<style lang="scss">
  /* Elements in app.html */
  :global(:root) {
    color-scheme: var(--color-scheme, dark light);
  }
  :global(body) {
    padding: 0;
    margin: 0;
    display: flex;
  }
  :global(div#game) {
    min-height: 100svh;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
