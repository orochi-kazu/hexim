<script>
  import { pushState } from '$app/navigation'
  import Title from '$lib/ui/Title.svelte'
  import Menu from '$lib/ui/Menu.svelte'
  import SplashMap from '$lib/feat/game/map/SplashMap.svelte'
  import { text as t } from '$lib/feat/text'

  const text = t.menu.main
</script>

<SplashMap />

<div class="content">
  <Title size="large" align="centre">{t.game.title()}</Title>

  <Menu
    title={text.title()}
    items={[
      { label: text.newGame(), onchoose: () => console.log('create a new game') },
      { label: text.newGamePlus(), onchoose: () => console.log('start from existing history') },
      { label: text.oldGame(), onchoose: () => console.log('load a saved game') },
      { label: text.settings(), type: 'link', path: '#/menu/settings' },
      { label: text.attrib(), type: 'link', path: '#/menu/attrib' },
    ]}
  />
</div>

<style lang="scss">
  .content {
    position: relative;
  }
</style>
