<script>
  import MapTileBackground from './MapTileBackground.svelte'
  const { type } = $props()
</script>

<div class={['map-tile', type]}>
  {#each ['nw', 'ne', 'w', 'e', 'sw', 'se'] as dir}
    <div class={['bg', dir]}><MapTileBackground /></div>
  {/each}
</div>

<style lang="scss">
  .map-tile {
    height: 100%;
    align-content: center;
    text-align: center;
    position: relative;

    .bg {
      width: 50%;
      height: 50%;
      position: absolute;

      &.nw {
        rotate: 60deg;
        top: 6.25%;
        left: 12.5%;
      }
      &.ne {
        rotate: 120deg;
        top: 6.25%;
        right: 12.5%;
      }
      &.w {
        rotate: 0deg;
        top: 25%;
        left: 0%;
      }
      &.e {
        rotate: 180deg;
        top: 25%;
        right: 0%;
      }
      &.sw {
        rotate: -60deg;
        bottom: 6.25%;
        left: 12.5%;
      }
      &.se {
        rotate: -120deg;
        bottom: 6.25%;
        right: 12.5%;
      }
    }

    &.empty {
      background-color: var(--bg-maptile-empty);

      :global(.main),
      :global(.central-dot),
      :global(.neighbour) {
        fill: var(--bg-maptile-empty);
      }
    }
    &.mountain {
      background-color: var(--bg-maptile-mountain-mid);

      :global(.main) {
        fill: var(--bg-maptile-mountain-mid);
      }
      :global(.central-dot) {
        fill: var(--bg-maptile-mountain-hi);
      }
      :global(.neighbour) {
        fill: var(--bg-maptile-mountain-lo);
      }
    }
    &.water {
      background-color: var(--bg-maptile-water-mid);

      :global(.main) {
        fill: var(--bg-maptile-water-mid);
      }
      :global(.central-dot) {
        fill: var(--bg-maptile-water-hi);
      }
      :global(.neighbour) {
        fill: var(--bg-maptile-water-lo);
      }
    }
    &.desert {
      background-color: var(--bg-maptile-desert-mid);

      :global(.main) {
        fill: var(--bg-maptile-desert-mid);
      }
      :global(.central-dot) {
        fill: var(--bg-maptile-desert-hi);
      }
      :global(.neighbour) {
        fill: var(--bg-maptile-desert-lo);
      }
    }
    &.plain {
      background-color: var(--bg-maptile-plain-mid);

      :global(.main) {
        fill: var(--bg-maptile-plain-mid);
      }
      :global(.central-dot) {
        fill: var(--bg-maptile-plain-hi);
      }
      :global(.neighbour) {
        fill: var(--bg-maptile-plain-lo);
      }
    }
    &.forest {
      background-color: var(--bg-maptile-forest-mid);

      :global(.main) {
        fill: var(--bg-maptile-forest-mid);
      }
      :global(.central-dot) {
        fill: var(--bg-maptile-forest-hi);
      }
      :global(.neighbour) {
        fill: var(--bg-maptile-forest-lo);
      }
    }
    &.city {
      background-color: var(--bg-maptile-city-mid);

      :global(.main) {
        fill: var(--bg-maptile-city-mid);
      }
      :global(.central-dot) {
        fill: var(--bg-maptile-city-hi);
      }
      :global(.neighbour) {
        fill: var(--bg-maptile-city-lo);
      }
    }
    &:hover {
      opacity: 80%;
    }
  }
</style>
