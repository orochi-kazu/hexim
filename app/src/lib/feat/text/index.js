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
    settings: m.menu_settings_title,
    attrib: m.menu_attrib_title,
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
  attrib: {
    title: m.menu_attrib_title,
    licences: {
      title: m.menu_attrib_licences_title,
      favicon: {
        title: m.menu_attrib_licences_icon_title,
        author: m.menu_attrib_licences_icon_author,
        licence: m.menu_attrib_licences_icon_licence,
        link: () => 'https://www.svgrepo.com/page/licensing/#CC%20Attribution',
      },
      back: common.action.back,
    },
    credits: {
      title: m.menu_attrib_credits_title,
      github: {
        prefix: m.menu_attrib_credits_github_link_prefix,
        link: m.menu_attrib_credits_github_link,
        suffix: m.menu_attrib_credits_github_link_suffix,
      },
      back: common.action.back,
    },
    back: common.action.back,
  },
}

export const text = { common, game, menu }
