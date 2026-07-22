<script>
  import SplashMap from './game/map/SplashMap.svelte'
  import GameTitle from './GameTitle.svelte'
</script>

<SplashMap />
<div class="game-title">
  <GameTitle />
</div>

<style lang="scss">
  .game-title {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
</style>
