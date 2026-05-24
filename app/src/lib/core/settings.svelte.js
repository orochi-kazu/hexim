const themes = Object.freeze({
  dark: 'dark',
  auto: 'auto',
  light: 'light',
})

let deviceTheme = $state(themes.auto)
let theme = $state(themes.auto)

const setDeviceTheme = (value) => (deviceTheme = value)
const setTheme = (value) => (theme = value)

export default {
  deviceTheme: { get: () => deviceTheme, set: setDeviceTheme },
  theme: { get: () => theme, set: setTheme },
}
export { themes }
