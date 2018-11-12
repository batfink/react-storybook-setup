import React from 'react'
import { storiesOf } from '@storybook/react'
import styled, { createGlobalStyle } from 'styled-components'
import Foobar from './Foobar'

const stories = storiesOf('Foobar', module)

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

stories.addParameters({ jest: ['Foobar'] })

stories.addDecorator(story => (
    <Wrapper>
        <GlobalStyle />
        { story() }
    </Wrapper>
))


stories
    .add('Default', () => (
        <Foobar>Some text</Foobar>
    ))
    .add('With className', () => (
        <Foobar className="energy">Some text</Foobar>
    ))
    .add('With style', () => (
        <Foobar style={ { color: moss } }>Some text</Foobar>
    ))
    .add(
        'Test results',
        () => <div>Jest results in storybook</div>,
    )
