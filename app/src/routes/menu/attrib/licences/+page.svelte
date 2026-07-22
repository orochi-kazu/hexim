<script>
  import { goto } from '$app/navigation'
  import Button from '$lib/ui/Button.svelte'
  import Container from '$lib/ui/Container.svelte'
  import Link from '$lib/ui/Link.svelte'
  import Text from '$lib/ui/Text.svelte'
  import Title from '$lib/ui/Title.svelte'
  import { text as t } from '$lib/feat/text'
  const text = t.menu.attrib.licences
</script>

{#snippet actions()}
  <Button onclick={() => goto('#/menu/attrib')}>{text.back()}</Button>
{/snippet}

<Container title={text.title()} {actions}>
  <Title>{text.favicon.title()}</Title>
  <div><Text>{text.favicon.author()}</Text></div>
  <div><Text><Link href={text.favicon.link()}>{text.favicon.licence()}</Link></Text></div>
</Container>
