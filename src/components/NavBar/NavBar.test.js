import { NavBar } from './NavBar'
import { shallow } from 'enzyme'
import React from 'react'

describe('NavBar', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<NavBar />)

    expect(wrapper).toMatchSnapshot()
  })
})