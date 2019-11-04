import React from 'react'
import { shallow } from 'enzyme'
import { UserForm, mapStateToProps, mapDispatchToProps } from './UserForm'

describe('UserForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<UserForm />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should update the title input onChange', () => {
    const mockEvent = { preventDefault() { }, target: { name: 'title', value: 'some title' } };

    const expected = 'some title'

    wrapper.instance().handleChange(mockEvent)

    expect(wrapper.state('title')).toEqual(expected)
  })

  it('should update the plot input onChange', () => {
    const mockEvent = { preventDefault() { }, target: { name: 'plot', value: 'some plot' } };

    const expected = 'some plot'

    wrapper.instance().handleChange(mockEvent)

    expect(wrapper.state('plot')).toEqual(expected)
  })

  it('should call the submitForm method when the button is clicked', () => {
    wrapper.instance().submitForm = jest.fn()
    wrapper.instance().forceUpdate()

    wrapper.find('button').simulate('click')

    expect(wrapper.instance().submitForm).toHaveBeenCalled()
  })

  it.skip('should call the submitForm method with the properties in state when the button is clicked', () => {
    const mockTitle = 'a title'
    const mockPlot = 'a plot'

    wrapper.instance().submitForm = jest.fn()

    wrapper.instance().setState({
      title: mockTitle,
      plot: mockPlot
    })

    wrapper.find('button').simulate('click')

    expect(wrapper.instance().submitForm).toHaveBeenCalledWith(mockTitle, mockPlot)
  })
})