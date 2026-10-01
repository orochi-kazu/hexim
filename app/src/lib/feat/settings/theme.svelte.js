import { themes as themesEnum } from '$lib/core/settings.svelte'
import { settings } from '$lib/deps'

const getTheme = () => settings.theme.selected
const themes = [themesEnum.light, themesEnum.auto, themesEnum.dark]
const themeIndex = $derived(themes.indexOf(settings.theme.selected))

const selectTheme = (index) => {
  const newIndex = (index + themes.length) % themes.length
  settings.theme.selected = themes[newIndex]
  setColorSchemeVar()
}

const setColorSchemeVar = () => {
  const cssTheme = {
    [themesEnum.light]: 'light',
    [themesEnum.auto]: 'dark light',
    [themesEnum.dark]: 'dark',
  }[settings.theme.selected]
  document.querySelector(':root').style.setProperty('--color-scheme', cssTheme)
}

const choose = {
  next: () => selectTheme(themeIndex + 1),
  prev: () => selectTheme(themeIndex - 1),
  set: (i) => selectTheme(i),
}

export { choose, getTheme, setColorSchemeVar, themes }
