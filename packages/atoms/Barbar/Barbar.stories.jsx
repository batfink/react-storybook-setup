import React from 'react'
import { storiesOf } from '@storybook/react'
import styled, { createGlobalStyle } from 'styled-components'
import Barbar from './Barbar'

const stories = storiesOf('Barbar', module)

/* eslint-disable no-unused-expressions */
const GlobalStyle = createGlobalStyle`
    .energy {
        color: hsl(348, 100%, 54%);
    }
`

const moss = 'hsl(184, 100%, 24%)'

const Wrapper = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    height: 100vh;
`

stories.addParameters({ jest: ['Barbar'] })

stories.addDecorator(story => (
    <Wrapper>
        <GlobalStyle />
        { story() }
    </Wrapper>
))


stories
    .add('Default', () => (
        <Barbar>Some text</Barbar>
    ))
    .add('With className', () => (
        <Barbar className="energy">Some text</Barbar>
    ))
    .add('With style', () => (
        <Barbar style={ { color: moss } }>Some text</Barbar>
    ))
    .add(
        'Test results',
        () => <div>Jest results in storybook</div>,
    )
