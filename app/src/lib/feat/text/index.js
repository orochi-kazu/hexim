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
    back: common.action.back,
  },
  main: {
    title: m.menu_main_title,
    newGame: m.menu_newgame_title,
    newGamePlus: m.menu_main_new_game_plus,
    oldGame: m.menu_main_old_game,
    settings: m.menu_settings_title,
    attrib: m.menu_attrib_title,
  },
  newGame: {
    title: m.menu_newgame_title,
    players: {
      sectionTitle: m.menu_newgame_players,
      human: {
        label: m.menu_newgame_players_human,
        name: m.menu_newgame_players_name,
      },
      ai: { label: m.menu_newgame_players_ai },
    },
    map: {
      sectionTitle: m.menu_newgame_map,
      mode: {
        label: m.menu_newgame_map_mode,
        isolated: m.menu_newgame_map_mode_isolated,
        shared: m.menu_newgame_map_mode_shared,
      },
      size: {
        label: m.menu_newgame_map_mode_size,
        xs: m.menu_newgame_map_mode_size_xs,
        s: m.menu_newgame_map_mode_size_s,
        m: m.menu_newgame_map_mode_size_m,
        l: m.menu_newgame_map_mode_size_l,
        xl: m.menu_newgame_map_mode_size_xl,
      },
    },
    start: m.menu_newgame_start,
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
  },
}

export const text = { common, game, menu }
