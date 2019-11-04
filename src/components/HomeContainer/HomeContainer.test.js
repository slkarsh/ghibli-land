import React from 'react'
import { HomeContainer } from './HomeContainer'
import { shallow } from 'enzyme'

describe('HomeContainer', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<HomeContainer />)

    expect(wrapper).toMatchSnapshot()
  })
})