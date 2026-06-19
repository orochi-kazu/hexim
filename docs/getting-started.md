# Getting started

Everything for the UI (single-page, progressive web app) is in the [`app`](/app) dir.

All regular `npm` stuff, check [`package.json`](/app/package.json) for scripts.

## Dev quick start

```shellscript
nvm use             # switch to the right npm version
npm install         # install dependencies (`npm i` for short)
npm start           # start dev server
npm start -- --open # start and open in a new browser tab/window
npm start -- --host # start and print various network host addresses
npm test            # run unit tests in watch mode
```

There is a `husky` pre-commit template, which will be installed on `npm install`.
This just makes sure `lint-staged` is run (to format code before commit), and then
a lint check, and unit tests, to catch any other unexpected problems. Before commit.

## Build / bundle

```shellscript
npm run build       # create a production version of the app
```

Then open `build/index.html`, since it's all bundled into one file.

## Deploy

Arguably not "getting started", but run `./scripts/deploy.sh` from the project root.
It will build, create a new branch, commit `index.html`, push, and reset the
`release/ghp` branch to the new commit (so Github Pages can pick it up).
