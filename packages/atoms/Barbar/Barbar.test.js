import React from 'react'
import Enzyme from 'enzyme'
import 'jest-styled-components'
import styled from 'styled-components'
import Barbar from './Barbar'

const { shallow, mount } = Enzyme

test('it matches snapshot', () => {
    const wrapper = shallow(<Barbar />)
    expect(wrapper).toMatchSnapshot()
})

test('it matches style rule', () => {
    const wrapper = mount(<Barbar />)
    expect(wrapper).toHaveStyleRule('display', 'grid')
})
