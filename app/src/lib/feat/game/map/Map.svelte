<script>
  import MapTile from './MapTile.svelte'

  const { tiles } = $props()
  let tilesDiv = $state()

  $effect(() => {
    tilesDiv?.style?.setProperty('--columns', tiles[0].length)
    tilesDiv?.style?.setProperty('--rows', tiles.length)
  })
</script>

<div class="map-tiles" bind:this={tilesDiv}>
  {#each tiles as row, iRow}
    {#each row as type, iCol}
      <div class={['map-tile', iRow % 2 === 1 ? 'offset' : '']}>
        <MapTile {type} />
      </div>
    {/each}
  {/each}
</div>

<style lang="scss">
  .map-tiles {
    --columns: 0;
    --rows: 0;

    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
    grid-template-rows: repeat(var(--rows), 1fr);
    grid-gap: 0rem;

    position: fixed;
  }
  .map-tile {
    --tile-width: 4rem;
    --tile-height: calc(var(--tile-width) * 1.15);

    width: var(--tile-width);
    height: var(--tile-height);
    margin: calc(-25% / sqrt(3)) 0;
    clip-path: polygon(50% 0, 150% 50%, 50% 100%, -50% 50%);

    &.offset {
      --offset: 50%;
      margin-left: var(--offset);
      margin-right: calc(-1 * var(--offset));
    }
  }
</style>
