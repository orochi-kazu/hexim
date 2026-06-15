<script>
  import { m as text } from '$lib/paraglide/messages'
  import Title from '$lib/ui/Title.svelte'
</script>

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
  }
</style>
