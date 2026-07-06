<script>
  import { m as text } from '$lib/paraglide/messages'
  import Title from '$lib/ui/Title.svelte'
  import SplashMap from './game/map/SplashMap.svelte'
</script>

<SplashMap />
<div class="game-title">
  <Title size="large">{text.game_title()}</Title>
</div>

<style lang="scss">
  .game-title {
    flex-grow: 1;
    display: flex;
    min-height: 100svh;
    justify-content: center;
    align-items: center;
    position: relative;
  }
</style>
