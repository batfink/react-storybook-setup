import React from 'react'
import Enzyme from 'enzyme'
import 'jest-styled-components'
import styled from 'styled-components'
import Barbaz from './Barbaz'

const { shallow, mount } = Enzyme

test('it matches snapshot', () => {
    const wrapper = shallow(<Barbaz />)
    expect(wrapper).toMatchSnapshot()
})

test('it matches style rule', () => {
    const wrapper = mount(<Barbaz />)
    expect(wrapper).toHaveStyleRule('display', 'grid')
})
