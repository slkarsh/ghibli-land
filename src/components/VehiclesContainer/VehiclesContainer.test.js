import React from 'react'
import { VehiclesContainer, mapStateToProps } from './VehiclesContainer'
import { shallow } from 'enzyme'

describe('VehiclesContainer', () => {
  describe('VehiclesContainer component', () => {
    let wrapper;
    beforeEach(() => {
      const mockCheckVehicles = jest.fn()
      const mockVehicles = [
        {
          name: 'airplane',
          description: 'it flies'
        },
        {
          name: 'boat',
          description: 'it floats'
        }
      ]
      wrapper = shallow(<VehiclesContainer
          checkVehicles={mockCheckVehicles}
          vehicles={mockVehicles} 
      />)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
  describe('mapStateToProps', () => {
    it('should reuturn an object with the vehicles array', () => {
      const mockState = {
        ovies: [
          {
            title: 'another film',
            description: 'it did not win an oscar',
            release_date: '2001',
            rt_score: 2
          },
          {
            title: 'a short film',
            description: 'shockingly didnt win any awards',
            release_date: '1776',
            rt_score: 5
          }
        ],
        vehicles:  [
          {
            name: 'airplane',
            description: 'it flies'
          },
          {
            name: 'boat',
            description: 'it floats'
          }
        ]
      }
      const expectedState = {
        vehicles:  [
          {
            name: 'airplane',
            description: 'it flies'
          },
          {
            name: 'boat',
            description: 'it floats'
          }
        ]
      }
      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expectedState)
    })
  })
})