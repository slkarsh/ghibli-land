import { PlacesCard, mapStateToProps, mapDispatchToProps } from './PlacesCard'
import React from 'react'
import { shallow } from 'enzyme'
import { toggleAddLocation } from '../../actions'

describe('PlacesCard', () => {
  let wrapper;
  const mockCheckPlaces = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<PlacesCard
      climate='cold'
      name='antarctica'
      terrain='icy'
      checkPlaces={mockCheckPlaces}
      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('mapStateToProps', () => {
    it('should return an object with an array of characters, locations, and vehicles', () => {
      const mockState = {
        diyMovie: {
          characters: [
            {
              name: 'Oliver',
              age: '1.5',
              species: 'dog'
            }
          ],
          locations: [
            {
              name: 'earth',
              terrain: 'varies'
            }
          ],
          vehicles: [
            {
              type: 'car',
              name: 'mazda',
            }
          ]
        }
      }
  
      const expectedState = {
        diyMovie: {
          characters: [
            {
              name: 'Oliver',
              age: '1.5',
              species: 'dog'
            }
          ],
          locations: [
            {
              name: 'earth',
              terrain: 'varies'
            }
          ],
          vehicles: [
            {
              type: 'car',
              name: 'mazda',
            }
          ]
        }
      }
  
      const mappedProps = mapStateToProps(mockState)
  
      expect(mappedProps).toEqual(expectedState)
    })
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a location object when toggleAddLocation is called', () => {
      const mockDispatch = jest.fn()

      const actionToDispatch = toggleAddLocation(
        {
          name: 'earth',
          terrain: 'varies'
        }
      )
      const mappedProps = mapDispatchToProps(mockDispatch)
      
      mappedProps.toggleAddLocation(
        {
          name: 'earth',
          terrain: 'varies'
        }
      )

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})