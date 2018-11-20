import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import Barbar from './Barbar'

const stories = storiesOf('Barbar', module)

const Wrapper = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    height: 100vh;
`

stories.addDecorator(story => (
    <Wrapper>
        { story() }
    </Wrapper>
))

stories
    .add('Default', () => (
        <Barbar>Some text</Barbar>
    ))
