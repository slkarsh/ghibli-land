import { CharactersContainer, mapStateToProps } from './CharactersContainer'
import { shallow } from 'enzyme'
import React from 'react'


describe('CharactersContainer', () => {
  describe('CharactersContainer component', () => {
    let wrapper;
    beforeEach(() => {
      const mockCheckCharacters = jest.fn()
      const mockCharacters = [
        {
          name: 'bob ross',
          age: 65,
          gender: 'male',
          species: 'human'
        },
        {
          name: 'oliver',
          age: 1.5,
          gender: 'male',
          species: 'dog'
        }
      ]
      wrapper = shallow(<CharactersContainer
          characters={mockCharacters}
          checkCharacters={mockCheckCharacters}
         />)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
  describe('mapStateToProps', () => {
    it.only('should return an object with the characters array', () => {
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
        characters: [
          {
            name: 'tom',
            gender: 'male',
            species: 'cat'
          },
          {
            name: 'jerry',
            gender: 'male',
            species: 'mouse'
          }
        ]
      }
      const expectedState = {
        characters: [
          {
            name: 'tom',
            gender: 'male',
            species: 'cat'
          },
          {
            name: 'jerry',
            gender: 'male',
            species: 'mouse'
          }
        ]
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expectedState)
    })
  })
})
