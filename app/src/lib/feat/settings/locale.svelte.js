import { settings } from '$lib/deps'
import { getLocale, locales, setLocale } from '$lib/paraglide/runtime'

const locale = $derived(getLocale())
const localeIndex = $derived(locales.indexOf(locale))

const selectLocale = (index) => {
  const newIndex = (index + locales.length) % locales.length
  const chosen = locales[newIndex]
  settings.locale.override = chosen
  setLocale(chosen)
}
const choose = {
  next: () => selectLocale(localeIndex + 1),
  prev: () => selectLocale(localeIndex - 1),
  set: (i) => selectLocale(i),
}

export { choose, getLocale, locales }
