#!/bin/bash
set -e

if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
    echo "We are in a pull request, not setting up release"
    exit 0
fi

if [[ $TRAVIS_BRANCH == 'master' ]]; then
    rm -rf .git
    git init
    git clean -dfx
    git remote add origin https://github.com/batfink/react-storybook-setup.git
    git fetch origin
    git clone https://github.com/$TRAVIS_REPO_SLUG.git $TRAVIS_REPO_SLUG
    git checkout $TRAVIS_BRANCH

    git config credential.helper store
    echo "https://${GH_NAME}:${GH_TOKEN}@github.com/batfink/react-storybook-setup.git" > ~/.git-credentials

    npm config set //registry.npmjs.org/:_authToken=$NPM_TOKEN -q
    npm prune

    git config --global user.email $GH_EMAIL
    git config --global user.name $GH_NAME
    git config --global push.default simple

    git fetch --tags
    git branch -u origin/$TRAVIS_BRANCH
    git fsck --full #debug
    echo "npm whoami"
    npm whoami #debug
    echo "git config --list"
    git config --list #debug
fi

