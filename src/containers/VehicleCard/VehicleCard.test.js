import { VehicleCard, mapStateToProps, mapDispatchToProps } from './VehicleCard'
import React from 'react'
import { shallow } from 'enzyme'
import { toggleAddVehicle } from '../../actions'

describe('VehicleCard', () => {
  let wrapper;
  const mockCheckVehicles = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<VehicleCard
      name='mazda'
      description='a small car'
      vehicle_class='car'
      checkVehicles={mockCheckVehicles}
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
    it('calls dispatch with a vehicle object when toggleAddVehicle is called', () => {
      const mockDispatch = jest.fn()

      const actionToDispatch = toggleAddVehicle({name: 'mazda', description: 'a small car', vehicle_class: 'car'})

      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.toggleAddVehicle({name: 'mazda', description: 'a small car', vehicle_class: 'car'})

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})