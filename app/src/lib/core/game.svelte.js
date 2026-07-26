import { game, params } from 'hexim-core'

// e.g.
// const game = buildGame({
//   seed: 'seed00',
//   players: { human: ['human0', 'human1'], ai: ['ai0', 'ai1'] },
//   map: { mode: mapMode.isolated, size: mapSize.xs }
// })
export const { buildGame } = game

export const { mapMode, mapSize } = params
