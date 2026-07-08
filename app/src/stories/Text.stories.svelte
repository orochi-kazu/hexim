<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import Text from '$lib/ui/Text.svelte'

  const { Story } = defineMeta({ component: Text })
  const text = 'Sample short text'
  const longText =
    "They'll get it all from you sooner or later 'cause they own this fuckin' place. It's a big club and you ain't in it. You and I are not in the big club. By the way, it's the same big club they use to beat you over the head with all day long when they tell you what to believe. All day long beating you over the head with their media telling you what to believe, what to think and what to buy. The table is tilted, folks. The game is rigged and nobody seems to notice. Nobody seems to care. Good, honest, hard-working people: white collar, blue collar, it doesn't matter what color shirt you have on."
</script>

{#snippet darklight(t, size)}
  <div>size = {size ?? 'default'}</div>
  <div class="split">
    {#each ['dark', 'light'] as theme}
      <div class={['themeable', theme]}><Text {size}>{t}</Text></div>
    {/each}
  </div>
{/snippet}

<Story name="Default">
  {#snippet children(args)}
    {@render darklight(text)}
    {@render darklight(text, 'small')}
    {@render darklight(longText, 'small')}
    {@render darklight(text, 'medium')}
    {@render darklight(longText, 'medium')}
    {@render darklight(text, 'large')}
  {/snippet}
</Story>

<style lang="scss">
  .split {
    display: flex;
    flex-direction: row;
    margin: 1rem 0;
  }
  .themeable {
    flex-grow: 1;
    padding: 1rem;
  }
</style>
