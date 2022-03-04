# Roadmap: MVP

## Foundation

- [ ] Skeleton app with version config
- [ ] Linter and formatter
- [ ] Commit message linter and helpers
- [ ] Test, build, and release scripts

## Presentation

- [ ] Match creation
  - [ ] Match parameters
  - [ ] Player registration
- [ ] Game scene: tile placement
  - [ ] Basic rendering and animation
    - [ ] Map
    - [ ] Region
    - [ ] Tile
    - [ ] Tile selection
    - [ ] Tile placement
    - [ ] HUD and player info
    - [ ] End of phase
    - [ ] Menu/actions
- [ ] Game scene: region minigame
  - [ ] Pre-minigame
    - [ ] Bonus shop
    - [ ] Region selection
  - [ ] Basic rendering and animation
    - [ ] Board
    - [ ] Tile
    - [ ] Tile swapping
    - [ ] HUD and region info
    - [ ] End of phase
    - [ ] Menu/actions
- [ ] Game scene: match finished
  - [ ] Basic rendering and animation
    - [ ] Scoreboard
    - [ ] Menu/actions

## Game use cases

- [ ] Match setup
  - [ ] Create match (with parameters)
  - [ ] Register player(s)
  - [ ] Begin match
- [ ] Gameplay: round management
  - [ ] Is match over?
  - [ ] Conclude match
- [ ] Gameplay: tile placement
  - [ ] View map
  - [ ] Draw tile
  - [ ] Place tile
  - [ ] End turn
  - [ ] Is phase over?
  - [ ] Next phase
- [ ] Gameplay: region minigame
  - [ ] Region selection
    - [ ] View playable regions
    - [ ] Begin minigame (for region)
    - [ ] Is phase complete?
    - [ ] Next phase
  - [ ] Minigame
    - [ ] View board
    - [ ] Swap tiles
    - [ ] Is minigame over?
    - [ ] Conclude mingame
- [ ] Gameplay: post-match
  - [ ] View scoreboard
  - [ ] Clear match

## Domain (engine)

- [ ] Match registration
  - [ ] Player registration
- [ ] Match manager
  - [ ] Player scoring
  - [ ] Round manager
    - [ ] Phase manager: tile placement
      - [ ] Region scoring
    - [ ] Phase manager: region minigame
      - [ ] Mingame scoring
- [ ] Phase tracker: tile placement
  - [ ] Map
  - [ ] Region
  - [ ] Tile
- [ ] Phase tracker: region minigame
  - [ ] Board
  - [ ] Tile

## System use cases

## Platform
