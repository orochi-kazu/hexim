const themes = Object.freeze({
  dark: 'dark',
  auto: 'auto',
  light: 'light',
})

const keys = Object.freeze({
  theme: Object.freeze({
    selected: Symbol('theme-selected'),
  }),
  locale: Object.freeze({
    override: Symbol('locale-override'),
  }),
})

const settings = $state({
  theme: {
    device: undefined,
    selected: undefined,
  },
  locale: {
    override: undefined,
  },
})

const settingsBuilder = ({ save, load }) => {
  const loadOr = (key, defaultValue) => {
    try {
      return load(key)
    } catch {
      return defaultValue
    }
  }

  settings.theme.selected = loadOr(keys.theme.selected, themes.auto)
  settings.locale.override = loadOr(keys.locale.override, null)

  $effect.root(() => {
    $effect(() => save(keys.theme.selected, settings.theme.selected))
    $effect(() => save(keys.locale.override, settings.locale.override))
  })

  return settings
}

export default settingsBuilder
export { keys, themes }
