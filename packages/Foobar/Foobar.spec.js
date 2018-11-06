import React from 'react'
import Enzyme from 'enzyme'
import 'jest-styled-components'
import styled from 'styled-components'
import Foobar from './Foobar'

const { shallow, mount } = Enzyme

test('it matches snapshot', () => {
    const wrapper = shallow(<Foobar />)
    expect(wrapper).toMatchSnapshot()
})

test('it matches style rule', () => {
    const wrapper = mount(<Foobar />)
    expect(wrapper).toHaveStyleRule('display', 'grid')
})
