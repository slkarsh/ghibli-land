import React from 'react'
import { PlacesContainer, mapStateToProps } from './PlacesContainer'
import { shallow } from 'enzyme'

describe('PlacesContainer', () => {
  describe('PlacesContainer component', () => {
    let wrapper;
    beforeEach(() => {
      const mockCheckPlaces = jest.fn()
      const mockPlaces = [
        {
          name: 'the moon',
          climate: 'cold',
          terrain: 'rocky'
        },
        {
          name: 'the earth',
          climate: 'variable',
          terrain: 'earthy'
        }
      ]
      wrapper = shallow(<PlacesContainer
        checkPlaces={mockCheckPlaces}
        places={mockPlaces}
      />)
    })
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
  describe('mapStateToProps', () => {
    it('should return an object with the places array', () => {
      const mockState = {
        movies: [
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
        places: [
          {
            name: 'the moon',
            climate: 'cold',
            terrain: 'rocky'
          },
          {
            name: 'the earth',
            climate: 'variable',
            terrain: 'earthy'
          }
        ]
      }
      const expectedState = {
        places: [
          {
            name: 'the moon',
            climate: 'cold',
            terrain: 'rocky'
          },
          {
            name: 'the earth',
            climate: 'variable',
            terrain: 'earthy'
          }
        ]
      }
      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expectedState)
    })
  })
})