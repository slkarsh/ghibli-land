import { CharacterCard, mapStateToProps, mapDispatchToProps } from './CharacterCard'
import { shallow } from 'enzyme'
import { toggleAddCharacter } from '../../actions'
import React from 'react'

describe('CharacterCard', () => {
  let wrapper;
  const mockCheckCharacters = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<CharacterCard 
      name='Sara'
      age='27'
      gender='female'
      species='human'
      checkCharacters={mockCheckCharacters}
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  //for mapStateToProps
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

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a character object when toggleAddCharacter is called', () => {
      const mockDispatch = jest.fn()

      const actionToDispatch = toggleAddCharacter({
        name: 'Oliver',
        age: '1.5',
        species: 'dog'
      })

      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.toggleAddCharacter({
        name: 'Oliver',
        age: '1.5',
        species: 'dog'
      })

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})