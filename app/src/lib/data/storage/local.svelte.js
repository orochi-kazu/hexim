import { browser } from '$app/environment'
import { keys } from '$lib/core/settings.svelte'

const keyMap = {
  [keys.theme.selected]: 'settings/theme/selected',
  [keys.locale.override]: 'settings/locale/override',
}

const withStorage = (doWithStorage) => {
  if (browser) {
    return doWithStorage(window.localStorage)
  }
}
const encode = (value) => JSON.stringify({ value })
const decode = (json) => JSON.parse(json).value

const save = (coreKey, value) =>
  withStorage((storage) => storage.setItem(keyMap[coreKey], encode(value)))

const load = (coreKey) => withStorage((storage) => decode(storage.getItem(keyMap[coreKey])))

export { load, save }
