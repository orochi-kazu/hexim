# Game design

> Everything in here is subject to change, especially in balance-tuning cycles.

As mentioned in the [readme](../../readme.md), a gameplay is divided into a cycle of rounds.
Each round has two phases: the first is tile drawing and placement,
the second is a set of region-based minigames.

## Map tiles

There are several kinds of tiles that can occupy the map space.
Some are provided during initialisation, and the rest are drawn and placed by players.

Initial tiles:

- Mountain (cliffs, rocky peaks, volcanoes, crevasses)
- Water (lakes, rivers, ocean, dams)
- Desert (dustbowl, sand, ice, rocky)

Player tiles:

- City (government, commerce, industry)
- Field (agriculture, livestock)
- Wilderness (forest, jungle, mangrove)

## Initial configuration

After player registration, default map parameters are set, but can be overridden.

- Size: more players means more map.
- Climate: influences tileset (e.g. tropical, temperate, frosty, hot desert, etc).
- Landmarks: influences map features (e.g. river, central lake, central peak, valley, etc).

Upon confirmation, the map is initialised, and players receive a starting budget.

All of this configuration is the basis for the save file,
which is an audit history for the entire game so far.

On the implementation side, the entire game should be procedural and deterministic,
(except for player input). From any point in the history, available options stay consistent.
This feature helps with debugging, and doubles as a replay comparison mechanic.

## Map phase

Players take turns purchasing and placing individual tiles.
A player can pass, to save money for other activities.
Players may not save tiles for later rounds.
The phase ends when all players consecutively pass.

When purchasing a tile, it is drawn from a pre-shuffled deck.

Tiles must be placed in a free space next to a player's own tiles, unless there is no such space.
The "no such space" condition

- occurs always at the start of a match (when no player tiles have been placed yet), and
- is possible later in a match if a player's starting (or subsequent) area becomes closed in.

During this phase, players build up regions of their own, for use in the next phase.
The geometry of a region determines turn count in the next phase,
which is: the count of each tile plus each interior tile side.

This implies that having dense regions (rather than sparse, thin regions) is an ideal strategy.

Aside from region size, placement near initial features (e.g. water), affects the region phase.

- Water helps fields targeting agriculture, and cities targeting commerce.
- Mountains help fields targeting livestock, and cities targeting industry.

## Region phase

Each player now plays a minigame for each region, with opportunitiy to buy bonuses prior to each.
The player decides the order of regions, and is not required to purchase bonuses.

Region minigame bonuses can be stored indefinitely, and include things like

- single-use items to destroy unwanted tiles,
- turn-limited spawn chance multipliers for certain tile types, and
- turn-limited buffs or debuffs for certain tile types.

In the minigame, tiles fill the board (falling in from the top).
Any tile region that fulfils the matching criteria is automatically cleared.

To clear tiles, the player takes a turn to swap two adjacent tiles.
To be a valid turn, the swapped tiles must fulfil the matching criteria.

To match, there must be at least four adjacent tiles of the same type, either in a straight line,
or in a diamond (2x2) pattern. If these criteria are met, the matching tiles, plus any extra
adjacent tiles of the same type are cleared.

A cleared set of tiles has an effect on the current map region.
These effects may be beneficial or harmful, depending on the tile type.

As long as the minigame has turns remaining, play continues.
Once tiles are cleared, any gaps are collapsed downwards,
and remaining spaces are filled with new tiles from the top.

If there are no valid moves, the minigame finishes early.

The player may elect to redeem a bonus before swapping tiles.
Bonus plays do not consume turns.

## Region minigame balance factors

**City**

Tile types: culture, commerce, industry, crime, justice.
Local stats: economy, desirability, corruption.

**Field**

Tile types: agriculture, livestock, pests, fertiliser, feed
Local stats: land quality, graze nutrition, field yield, livestock yield.

**Wilderness**

Tile types: lumber, wildlife, water catchment, recreation, gather food.
Local stats: habitability, flora population, fauna population, scenery.

**Extraction**

Some tile clearing yields immediate extraction, and some extraction is calculated at the end.
For example, field and livestock yield happen at the end, but lumber happens on clear.

Resulting extraction determines a region's output, and the player's income.

## Endgame

The vibrancy of cities (which are supported by other region types) determines a player's score.
At the conclusion of the game, the winner is the player with the highest combined city score.
