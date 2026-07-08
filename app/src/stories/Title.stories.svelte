<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf'
  import Title from '$lib/ui/Title.svelte'

  const { Story } = defineMeta({ component: Title })
  const text = 'I saw the best minds of my generation'
</script>

{#snippet darklight(t, size)}
  <div>size = {size ?? 'default'}</div>
  {#each ['dark', 'light'] as theme}
    <div class={['themeable', theme]}><Title {size}>{t}</Title></div>
  {/each}
{/snippet}

<Story name="Default">
  {#snippet children(args)}
    {@render darklight(text)}
    {@render darklight(text, 'medium')}
    {@render darklight(text, 'large')}
  {/snippet}
</Story>
