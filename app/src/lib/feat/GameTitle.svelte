<script>
  import Title from '$lib/ui/Title.svelte'
  import { text as t } from '$lib/feat/text'
</script>

<div class="title">
  <Title size="large" align="centre">{t.game.title()}</Title>
</div>

<style lang="scss">
  .title {
    filter: drop-shadow(0 0 0.08rem var(--bg));
  }
</style>
