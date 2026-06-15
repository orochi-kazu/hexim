<script>
  import { getLocale, locales, choose as chooseLocale } from '$lib/feat/settings/locale.svelte'
  import { getTheme, themes, choose as chooseTheme } from '$lib/feat/settings/theme.svelte'
  import { text as t } from '$lib/feat/text'
  import Button from '$lib/ui/Button.svelte'
  import Menu from '$lib/ui/Menu.svelte'

  const text = t.menu.settings

  const legibleLocale = (locale) => {
    const displayName = text.locale[locale]?.()
    return text.locale.format({ displayName, locale })
  }

  const legibleTheme = (theme) => text.theme[theme]?.()
</script>

<Menu
  title={text.title()}
  items={[
    {
      label: text.lang(),
      note: text.langNote(),
      type: 'toggle',
      value: legibleLocale(getLocale()),
      options: locales.map(legibleLocale),
      ontogglenext: chooseLocale.next,
      ontoggleprev: chooseLocale.prev,
      onchooseoption: chooseLocale.set,
    },
    {
      label: text.theme.label(),
      type: 'toggle',
      value: legibleTheme(getTheme()),
      options: themes.map(legibleTheme),
      ontogglenext: chooseTheme.next,
      ontoggleprev: chooseTheme.prev,
      onchooseoption: chooseTheme.set,
    },
    { label: text.back(), type: 'link', path: '#/menu' },
  ]}
/>
