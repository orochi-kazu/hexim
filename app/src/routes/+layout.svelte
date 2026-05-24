<script>
  import { browser } from '$app/environment'
  import favicon from '$lib/assets/favicon.svg'
  import { themes } from '$lib/core/settings.svelte'
  import { deps } from '$lib/deps'

  const { children } = $props()

  let browserPrefersDark = $state(undefined)
  let styleTheme = $state(themes.auto)

  const setThemeByDevicePreference = (isDark) => {
    deps.settings.deviceTheme.set(isDark ? themes.dark : themes.light)
    browserPrefersDark = isDark

    if (deps.settings.theme.get() === themes.auto) {
      styleTheme = browserPrefersDark ? themes.dark : themes.light
    } else {
      styleTheme = theme
    }
  }

  if (browser) {
    let preferDark = window.matchMedia('(prefers-color-scheme: dark)')
    setThemeByDevicePreference(preferDark)

    preferDark.addEventListener('change', (event) => {
      setThemeByDevicePreference(event.matches)
      console.log('prefers-color-scheme changed', { browserPrefersDark })
    })
  }
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div id="game" class={styleTheme}>{@render children()}</div>

<style lang="scss">
  :global(body) {
    padding: 0;
    margin: 0;
    display: flex;
  }
  :global(div#game-wrapper) {
    flex-grow: 1;
    display: flex;
  }
  div#game {
    min-height: 100vh;
    flex-grow: 1;
    &.light {
      background-color: mintcream;
      color: black;
    }
    &.dark {
      background-color: black;
      color: mintcream;
    }
  }
</style>
