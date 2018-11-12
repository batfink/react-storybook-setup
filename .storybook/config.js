import { configure, addDecorator } from '@storybook/react'
import { withTests } from '@storybook/addon-jest'
import { withOptions } from '@storybook/addon-options'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

import results from '../jest-test-results.json'

const GlobalStyle = createGlobalStyle`
    body {
        background: gray;
    }
`


// filesExtension is needed with current version of addon,
// or else "no test configured" error occures
addDecorator(
    withTests({
        results,
        filesExt: '.test.js',
    }),
)

addDecorator(
    withOptions({
        addonPanelInRight: true,
    }),
)

addDecorator(story => (
    <>
        <GlobalStyle />
        {story()}
    </>
))

const req = require.context('../packages', true, /\.stories\.jsx$/)

function loadStories() {
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
