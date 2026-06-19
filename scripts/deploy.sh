#!/usr/bin/env bash
set -o errexit
set -o nounset

TREEISH="${1:-$(git rev-parse --short HEAD)}"

function app_version {
  jq '.version' < app/package.json | tr -d '"'
}

function release_branch_name {
  echo "release/$(app_version)/$TREEISH"
}

function switch_to_release_branch {
  BRANCH=`release_branch_name`
  git switch -c $BRANCH
}

function switch_back_to_previous_branch {
  git switch -
}

function commit_push_release {
  git add index.html
  git commit -m "Release version $(app_version) ($TREEISH)" --no-verify
  git push -u
  git branch -f release/ghp HEAD
  git push -f origin release/ghp
}

function build_dist {
  pushd app
  npm run build
  cp build/index.html ../
  popd
}

build_dist
switch_to_release_branch
commit_push_release
switch_back_to_previous_branch
