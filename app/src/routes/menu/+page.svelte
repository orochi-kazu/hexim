<script>
  import { pushState } from '$app/navigation'
  import Menu from '$lib/ui/Menu.svelte'
  import GameTitle from '$lib/feat/GameTitle.svelte'
  import SplashMap from '$lib/feat/game/map/SplashMap.svelte'
  import { text as t } from '$lib/feat/text'

  const text = t.menu.main
</script>

<SplashMap />

<div class="content">
  <GameTitle />

  <Menu
    title={text.title()}
    items={[
      { label: text.newGame(), type: 'link', path: '#/menu/new-game' },
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
