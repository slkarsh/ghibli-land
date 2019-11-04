import { MovieCard } from './MovieCard'
import React from 'react'
import { shallow } from 'enzyme'

describe('MovieCard', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<MovieCard
        title='a film'
        description='a plot'
        release_date='2001'
        rt_score={89}
        setId={2}
       />)

       expect(wrapper).toMatchSnapshot()
  })
})