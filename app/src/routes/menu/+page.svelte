<script>
  import { pushState } from '$app/navigation'
  import { text as t } from '$lib/feat/text'
  import Title from '$lib/ui/Title.svelte'
  import Menu from '$lib/ui/Menu.svelte'

  const text = t.menu.main
</script>

<Title size="large">{t.game.title()}</Title>

<Menu
  title={text.title()}
  items={[
    { label: text.newGame(), onchoose: () => console.log('create a new game') },
    { label: text.newGamePlus(), onchoose: () => console.log('start from existing history') },
    { label: text.oldGame(), onchoose: () => console.log('load a saved game') },
    { label: text.settings(), type: 'link', path: '#/menu/settings' },
    { label: text.attrib(), onchoose: () => console.log('credits, OSS acks, etc') },
  ]}
/>
