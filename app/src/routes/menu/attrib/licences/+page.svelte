<script>
  import Container from '$lib/ui/Container.svelte'
  import Link from '$lib/ui/Link.svelte'
  import Text from '$lib/ui/Text.svelte'
  import Title from '$lib/ui/Title.svelte'
  import { text as t } from '$lib/feat/text'
  const text = t.menu.attrib.licences
</script>

<Container title={text.title()}>
  <Title>{text.favicon.title()}</Title>
  <div><Text>{text.favicon.author()}</Text></div>
  <div><Text><Link href={text.favicon.link()}>{text.favicon.licence()}</Link></Text></div>
  <br />
  <div>
    <Text><Link href="#/menu/attrib">{text.back()}</Link></Text>
  </div>
</Container>
