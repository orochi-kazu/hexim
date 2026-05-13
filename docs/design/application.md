# Application design

## Externalised core module

The core domain layer lives in a [separate repo](https://github.com/orochi-kazu/hexim-core), so the
same version can be sourced as a module from multiple codebases (e.g. this SPA, and a future API).

This hard separation also helps enforce communication restrictions between layers, which is
an important factor of 2 design principles: separation of concerns, and single-responsibility.

## Layered architecture

There are 3 main layers:

- an abstract core (which models domain concerns),
- a user-facing layer (interactive UI rendered by the browser, audio, etc), and
- a data-oriented layer (talking to local storage, external APIs, etc).

One main design principle for this clean architecture is that each layer doesn't know about any
outer layers, and each layer may only communicate inwards or outwards to its adjacent neighbor.
This implies that anything not modeled by the external core game layer (e.g. other subsystems,
such as audio) should still have an abstract representation in this codebase's core layer.

The core layer defines interfaces for outer layers to fulfil, and collaborators are provided
as constructor parameters by the configuration module.

## Subsystems

### UI state management

- Scene presentation
  - Out-of-game
  - In-game map mode
    - Map rendering
    - UI rendering
  - In-game region mode
    - Board rendering
    - UI rendering
  - End-game
- Menu presentation
  - Configuration settings (e.g. audio volume, accessibility options, etc)
  - Save-game selection
  - New game setup
  - In-game menu UI
  - In-game non-game choices (e.g. config, exit, etc)

### Design system UI component library

- Menus
  - List items
    - Undecorated
    - Checkbox
    - Option select
    - Multi-select
  - Modal
    - Central overlay
    - Settings
    - Dialog prompt
  - Modal optional
    - Contextual
- Buttons
- Draggable tiles/cards
- Story dialogue boxes
  - Animated text reveal
  - Character avatar (animated?)
- Notification toasts
- Text
  - Styles
    - Sizes
    - Fonts
- Icons

### Text management

- Centralised repository
- Localisation

### Player input

- Touch (including accessibility modes)
- Game controller(s)
- Mouse
- Keyboard
- Any other input devices, especially accessibility aids

### Game state persistence

- Saving
- Loading
- New game plus (copy an old game up to a specific point)

### Audio

- Background music
- Notification fanfares (which can force BGM ducking)
- In-game-universe sound effects (e.g. rivers, trees, city noises, mining, weather, animals, etc)
- UI interaction sound effects (e.g. menu item selections, button clicks, tile placement, etc)

### Authentication and authorisation for online play

- TBD
