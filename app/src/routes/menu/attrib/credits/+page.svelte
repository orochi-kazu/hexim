<script>
  import Container from '$lib/ui/Container.svelte'
  import Link from '$lib/ui/Link.svelte'
  import Text from '$lib/ui/Text.svelte'
  import { text as t } from '$lib/feat/text'
  const text = t.menu.attrib.credits
</script>

<Container title={text.title()}>
  <div>
    <Text>
      {text.github.prefix()}<Link href="https://github.com/orochi-kazu/hexim">
        {text.github.link()}
      </Link>{text.github.suffix()}
    </Text>
  </div>
  <br />
  <div>
    <Text><Link href="#/menu/attrib">{text.back()}</Link></Text>
  </div>
</Container>
