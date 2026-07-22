<script>
  import { goto } from '$app/navigation'
  import Button from '$lib/ui/Button.svelte'
  import Container from '$lib/ui/Container.svelte'
  import Link from '$lib/ui/Link.svelte'
  import Text from '$lib/ui/Text.svelte'
  import { text as t } from '$lib/feat/text'
  const text = t.menu.attrib.credits
</script>

{#snippet actions()}
  <Button onclick={() => goto('#/menu/attrib')}>{text.back()}</Button>
{/snippet}

<Container title={text.title()} {actions}>
  <div>
    <Text>
      {text.github.prefix()}<Link href="https://github.com/orochi-kazu/hexim">
        {text.github.link()}
      </Link>{text.github.suffix()}
    </Text>
  </div>
</Container>
