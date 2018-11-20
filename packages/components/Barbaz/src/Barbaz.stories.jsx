import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import Bazar from 'batfink-bazar'
import Barbaz from './Barbaz'

const stories = storiesOf('Barbaz', module)

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
        <>
            <div>
                <Barbaz>Some text</Barbaz>
                <Bazar>Some more text</Bazar>
            </div>           
        </>
    ))
