<script>
  import { buildGame, mapMode, mapSize } from '$lib/core/game.svelte'
  import { text as t } from '$lib/feat/text'
  import Button from '$lib/ui/Button.svelte'
  import Menu from '$lib/ui/Menu.svelte'

  const text = t.menu.newGame

  const humanOptions = Object.freeze([1, 2, 3, 4])
  let humanIndex = $state(0)
  const selectHumans = (index) => {
    const newIndex = (index + humanOptions.length) % humanOptions.length
    humanIndex = newIndex
  }
  const humanCount = $derived(humanOptions[humanIndex])

  const aiOptions = Object.freeze([0])
  let aiIndex = $state(0)
  const selectAIs = (index) => {
    const newIndex = (index + aiOptions.length) % aiOptions.length
    aiIndex = newIndex
  }
  const aiCount = $derived(aiOptions[aiIndex])

  const legibleNumber = (count) => `${count}`

  const modes = Object.freeze(Object.keys(mapMode))
  let mapModeIndex = $state(0)
  const selectMapMode = (index) => {
    const newIndex = (index + modes.length) % modes.length
    mapModeIndex = newIndex
  }
  const legibleMode = (mode) => text.map.mode[mode]()
  const mode = $derived(mapMode[modes[mapModeIndex]])

  const sizes = Object.freeze(Object.keys(mapSize))
  let mapSizeIndex = $state(sizes.length >> 1)
  const selectMapSize = (index) => {
    const newIndex = (index + sizes.length) % sizes.length
    mapSizeIndex = newIndex
  }
  const legibleSize = (size) => text.map.size[size]()
  const size = $derived(mapSize[sizes[mapSizeIndex]])

  const debugBuildGame = () => {
    const human = ['Andy', 'Boris', 'Chungus', 'Drongo'].slice(0, humanCount)
    const ai = [].slice(0, aiCount)
    const game = buildGame({
      seed: `${Date()}`,
      players: { human, ai },
      map: { mode, size },
    })
    console.log(game)
  }
</script>

{#snippet actions()}
  <Button onclick={debugBuildGame}>{text.start()}</Button>
{/snippet}

<Menu
  title={text.title()}
  items={[
    { label: text.players.sectionTitle(), type: 'section-title' },
    {
      label: text.players.human.label(),
      type: 'toggle',
      value: legibleNumber(humanOptions[humanIndex]),
      options: humanOptions.map(legibleNumber),
      ontogglenext: () => selectHumans(humanIndex + 1),
      ontoggleprev: () => selectHumans(humanIndex - 1),
      onchooseoption: selectHumans,
    },
    {
      label: text.players.ai.label(),
      type: 'toggle',
      value: legibleNumber(aiOptions[aiIndex]),
      options: aiOptions.map(legibleNumber),
      ontogglenext: () => selectAIs(aiIndex + 1),
      ontoggleprev: () => selectAIs(aiIndex - 1),
      onchooseoption: selectAIs,
    },
    { label: text.map.sectionTitle(), type: 'section-title' },
    {
      label: text.map.mode.label(),
      type: 'toggle',
      value: legibleMode(modes[mapModeIndex]),
      options: modes.map(legibleMode),
      ontogglenext: () => selectMapMode(mapModeIndex + 1),
      ontoggleprev: () => selectMapMode(mapModeIndex - 1),
      onchooseoption: selectMapMode,
    },
    {
      label: text.map.size.label(),
      type: 'toggle',
      value: legibleSize(sizes[mapSizeIndex]),
      options: sizes.map(legibleSize),
      ontogglenext: () => selectMapSize(mapSizeIndex + 1),
      ontoggleprev: () => selectMapSize(mapSizeIndex - 1),
      onchooseoption: selectMapSize,
    },
  ]}
  backUrl="#/menu"
  {actions}
/>
