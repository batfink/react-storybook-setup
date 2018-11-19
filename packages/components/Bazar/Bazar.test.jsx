import React from 'react'
import Enzyme from 'enzyme'
import 'jest-styled-components'
import styled from 'styled-components'
import Bazar from './Bazar'

const { shallow, mount } = Enzyme

test('it matches snapshot', () => {
    const wrapper = shallow(<Bazar />)
    expect(wrapper).toMatchSnapshot()
})

test('it matches style rule', () => {
    const wrapper = mount(<Bazar />)
    expect(wrapper).toHaveStyleRule('display', 'grid')
})
