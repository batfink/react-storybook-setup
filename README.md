# react-storybook-setup
A basic setup for React, Storybook, Rollup, Lerna, Conventional Commits, Eslint, Styled Components, Travis etc.

What's included
---------------

Workflow
--------

`yarn start` - runs test, generates output, starts storybook
`yarn test:watch` - run this in a separate window

If a snapshot test fails because you've changed something, type "u" to update the snapshot

`yarn build:components` - runs tests, runs lerna run build, which in turn runs the build command in all components


- https://github.com/storybooks/storybook/tree/master/addons/storyshots/storyshots-core
- https://codeburst.io/build-your-own-react-component-library-with-lerna-and-storybook-53298b186760
