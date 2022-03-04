# Contribution

This game project (actually several sub-projects that build the functional part of a product) is
intended to be used as a programming, and especially game programming refresher.

Some of us used to make games, and some of us never have.
Most game code that I see is woefully unarchitected and exhibits little to no discipline in areas
of quality, testing, rigor, determinism, repeatability, and principles.

We absolutely intend to break that mould, and bake intentfulness and discipline in, from the start.

## First contact

If you genuinely wish to contribute, introduce yourself first :) We're all just people.

Please don't spend a bunch of time working on something without seeing what's up.

## Next steps

Make sure you have at least a passing familiarity with vocabulary related to:

- domain-driven design
- clean architecture
- test automation
- build pipelines and CI/CD

The [getting started guide](./docs/design/getting-started.md) will help you set your dev env up.

There's a great article about [how to write commit messages](https://cbea.ms/git-commit/).
I strongly recommend reading it if you haven't; it's nicer than any Linux Kernel styleguide I've
read, and very principled. It doesn't tell you only what to do, but why, and how to approach it.

Also good to know: [semantic release](https://github.com/semantic-release/semantic-release).
Since there are aspirations to have an online-multiplayer mode, sane versioning will be required.
It, therefore, becomes important to make it easy to do right, and hard to do wrong.

## Protected main branch, trunk-based workflow

We want the main branch to be playable always, so no broken things should be merged.
But we also don't want long-lived feature branches, and the merge hell that comes with them.
(Long-lived in this case means diverging from their parent branch
by a moderate-to-large number of commits, e.g. `down 7`)

This is remedied in two ways: rebasing branches often (required before merge), and feature flags.

Working in this mode also helps facilitate public contributions:
both internal and external devs have more-or-less the same workflow.

## Licensing and income

Still working on this bit. We want to reward people for their work, not profiteer.
And also want the endeavour to somewhat pay for itself.

So it might cost a token amount on whatever platforms it's published on? Not sure yet.
Or maybe it's like a crowd-funded kinda thing? Who knows.
