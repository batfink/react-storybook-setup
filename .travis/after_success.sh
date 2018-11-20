#!/bin/bash
set -e

if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
    echo "We are in a pull request, not releasing"
    exit 0
fi

if [[ $TRAVIS_BRANCH == "master" ]]; then
    echo "We are in master, and we're about to run semantic release"
    npm run semantic-release
fi
