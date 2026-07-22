<script>
  import Menu from '$lib/ui/Menu.svelte'
  import { text as t } from '$lib/feat/text'
  const text = t.menu.attrib
</script>

<Menu
  title={text.title()}
  items={[
    { label: text.licences.title(), type: 'link', path: '#/menu/attrib/licences' },
    { label: text.credits.title(), type: 'link', path: '#/menu/attrib/credits' },
  ]}
  backUrl="#/menu"
/>
