<script>
  import Map from '$lib/feat/game/map/Map.svelte'

  const X = 'empty'
  const M = 'mountain'
  const W = 'water'
  const D = 'desert'
  const P = 'plain'
  const F = 'forest'
  const C = 'city'

  const tiles = [
    [X, X, X, X, X, X, X, M, M, M, M, M, M, M, M, M, M, X, X, X, X, X, X],
    [X, X, X, X, X, M, M, M, M, D, D, D, D, M, M, M, M, M, X, X, X, X, X],
    [X, X, X, X, M, M, M, M, M, D, D, D, D, D, D, D, D, F, M, M, X, X, X],
    [X, X, M, M, M, M, M, D, D, D, D, D, D, D, D, D, F, F, F, M, X, X, X],
    [X, M, M, M, M, M, M, D, D, D, D, D, D, P, P, P, P, F, F, F, W, X, X],
    [X, M, M, M, M, M, P, P, P, P, P, P, P, P, P, P, P, P, P, P, W, X, X],
    [X, M, M, M, M, M, M, P, P, P, P, P, P, P, P, C, C, P, P, P, W, W, X],
    [X, M, M, M, M, M, F, P, P, P, P, P, P, P, C, C, C, W, W, W, W, W, X],
    [X, X, M, M, M, M, F, F, P, P, P, P, P, P, F, C, C, W, W, W, W, W, X],
    [X, X, M, M, M, F, F, F, F, F, F, F, F, F, F, F, W, W, W, W, W, X, X],
    [X, X, X, X, M, M, F, F, F, F, F, F, F, F, F, F, W, W, W, W, X, X, X],
    [X, X, X, X, X, M, W, W, W, W, F, F, F, W, W, W, W, W, X, X, X, X, X],
    [X, X, X, X, X, X, W, W, W, W, W, W, W, W, W, W, W, X, X, X, X, X, X],
  ]
</script>

<Map {tiles} />
