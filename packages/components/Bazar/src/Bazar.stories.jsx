import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import Bazar from './Bazar'

const stories = storiesOf('Bazar', module)

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
        <Bazar>Some text</Bazar>
    ))
