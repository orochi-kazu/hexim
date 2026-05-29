import settingsBuilder from './core/settings.svelte'
import { load, save } from './data/storage/local.svelte'

const settings = settingsBuilder({ save, load })

export { settings }
