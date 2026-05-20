# Getting started

Everything for the UI (single-page, progressive web app) is in the [`app`](/app) dir.

All regular `npm` stuff, check [`package.json`](/app/package.json) for scripts.

## Dev quick start

```shellscript
nvm use             # switch to the right npm version
npm install         # install dependencies (`npm i` for short)
npm start           # start dev server
npm start -- --open # start and open in a new browser tab/window
npm test            # run unit tests in watch mode
```

There is a `husky` pre-commit template, which will be installed on `npm install`.
This just makes sure `lint-staged` is run (to format code before commit), and then
a lint check, and unit tests, to catch any other unexpected problems. Before commit.

## Build / bundle

```shellscript
npm run build       # create a production version of the app
npm run preview     # preview the production build
```
