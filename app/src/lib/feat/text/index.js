import { m } from '$lib/paraglide/messages'

const common = {
  action: {
    back: m.common_action_back,
  },
}
const game = {
  title: m.game_title,
}
const menu = {
  common: {
    note: m.common_menu_note,
    optionsPrefix: m.common_menu_options_prefix,
    optionsSuffix: m.common_menu_options_suffix,
  },
  main: {
    title: m.menu_main_title,
    newGame: m.menu_main_new_game,
    newGamePlus: m.menu_main_new_game_plus,
    oldGame: m.menu_main_old_game,
    settings: m.menu_main_settings,
    attrib: m.menu_main_attrib,
  },
  settings: {
    title: m.menu_settings_title,
    lang: m.menu_settings_lang,
    langNote: m.menu_settings_lang_note,
    locale: {
      format: m.locale_legible,
      en: m.locale_en,
      ja: m.locale_ja,
    },
    theme: {
      label: m.menu_settings_theme,
      light: m.menu_settings_theme_light,
      auto: m.menu_settings_theme_auto,
      dark: m.menu_settings_theme_dark,
    },
    back: common.action.back,
  },
}

export const text = { common, game, menu }
