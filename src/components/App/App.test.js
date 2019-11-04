import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { shallow } from 'enzyme'
import { fetchFilms, getPeople, fetchLocations, fetchVehicles } from '../../apiCalls'
import { setMovies, setPeople, setPlaces, setVehicles, hasErrored } from '../../actions'

jest.mock('../../apiCalls')

describe('App', () => {
  
  beforeEach(() => {
    fetchFilms.mockImplementation(() => {
      return Promise.resolve([
        {
          title: 'spirited away',
          release_date: '1989',
          description: 'a film',
          rt_score: '29'
        },
        {
          title: 'another film',
          release_date: '2001',
          description: 'a plot',
          rt_score: '39'
        }
      ])
    })

    getPeople.mockImplementation(() => {
      return Promise.resolve([
        {
          name: 'Sara',
          age: '27',
          gender: 'female',
          species: 'human'
        },
        {
          name: 'oliver',
          age: '1.5',
          gender: 'male',
          species: 'dog'
        }
      ])
    })
  })
  describe('App component', () => {
    let wrapper;
    beforeEach(() => {
      const mockDiyMovie = {
        characters: [
          {
            name: 'oliver',
            age: '1.5',
            species: 'dog',
            gender: 'male'
          }
        ],
        locations: [
          {
            name: 'earth',
            climate: 'mild',
            terrain: 'varies'
          }
        ],
        vehicles: [
          {
            name: 'mazda',
            description: 'a small car',
            type: 'car'
          }
        ],
        title: '',
        plot: '',
        score: null
      }

      const mockSetMovies = jest.fn()
      wrapper = shallow(<App diyMovie={mockDiyMovie} setMovies={mockSetMovies}/>)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should retrieve movies after mounting', () => {
      expect(fetchFilms).toHaveBeenCalled()
    })

    it.skip('should retrieve people after mounting', () => {
      // wrapper.istance().forceUpdate()
      expect(getPeople).toHaveBeenCalled()
    })

    it('should return true if checkCharacters is called with a character present in the characters array', () => {
     const mockCharacter = {
        name: 'oliver',
        age: '1.5',
        species: 'dog',
        gender: 'male'
      }

      wrapper.instance().checkCharacters(mockCharacter.name)

      expect(wrapper.instance().checkCharacters('oliver')).toEqual(true)

    })
    it('should return false if checkCharacters is called with a character not already present in the characters array', () => {
      const mockCharacter = {
        name: 'sara',
        age: '27',
        species: 'human',
        gender: 'female'
      }

      wrapper.instance().checkCharacters(mockCharacter.name)

      expect(wrapper.instance().checkCharacters('sara')).toEqual(false)
    })

    it('should return true if checkPlaces is called with a location present in the locations array', () => {
      const mockLocation = {
        name: 'earth',
        climate: 'mild',
        terrain: 'varies'
      }

      wrapper.instance().checkPlaces(mockLocation.name)

      expect(wrapper.instance().checkPlaces('earth')).toEqual(true)
    })

    it('should return false if checkPlaces is called with a location not present in the locations array', () => {
      const mockLocation = {
        name: 'moon',
        climate: 'cold',
        terrain: 'rocky'
      }

      wrapper.instance().checkPlaces(mockLocation.name)

      expect(wrapper.instance().checkPlaces('moon')).toEqual(false)
    })

    it('should return true if checkVehicles is called with a vehicle already in the vehicles array', () => {
      const mockVehicle = {
        name: 'mazda',
        description: 'a small car',
        type: 'car'
      }

      wrapper.instance().checkVehicles(mockVehicle.name)

      expect(wrapper.instance().checkVehicles('mazda')).toEqual(true)
    })

    it('should return false if checkVehicles is called with a vehicle not already in the vehicles array', () => {
      const mockVehicle = {
        name: 'titanic',
        description: 'not the best',
        type: 'boat'
      }

      wrapper.instance().checkVehicles(mockVehicle.name)

      expect(wrapper.instance().checkVehicles('titanic')).toEqual(false)
    })
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
    it('calls dispatch with a movies array when setMovies is called', () => {
      const mockDispatch = jest.fn()

      const actionToDispatch = setMovies([{title: 'a title'}, {title: 'another title'}])

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setMovies([{title: 'a title'}, {title: 'another title'}])

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('calls dispatch with a characters array when setPeople is called', () => {
      const mockDispatch = jest.fn()

      const actionToDispatch = setPeople([{name: 'Sara', age: '27', gender: 'female', species: 'human'}])
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.setPeople([{name: 'Sara', age: '27', gender: 'female', species: 'human'}])

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('calls dispatch with an array of locations when setPlaces is called', () => {
      const mockDispatch = jest.fn()

      const actionToDispatch = setPlaces([{name: 'earth', climate: 'mild', terrain: 'varies'}])
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.setPlaces([{name: 'earth', climate: 'mild', terrain: 'varies'}])

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('calls dispatch with an array of vehicles when setVehicles is called', () => {
      const mockDispatch = jest.fn()

      const actionToDispatch = setVehicles([{name: 'mazda', type: 'car', description: 'a small car'}])

      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.setVehicles([{name: 'mazda', type: 'car', description: 'a small car'}])

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)

    })

    it('calls dispatch with an error message when hasErrored is called', () => {
      const mockDispatch = jest.fn()

      const actionToDispatch = hasErrored({message: 'error'})

      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.hasErrored({message: 'error'})

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })

  // describe('mapDispatchToProps', () => {
  //   it('calls dispatch with a setMovies action when ', )
  // })
})


// describe('mapDispatchToProps', () => {
//   it.skip('calls dispatch with an loginUser action when button is clicked', () => {
//     // Setup
//     const mockDispatch = jest.fn();
//     const actionToDispatch = loginUser({ name: '', id: '', isSignedIn: false })

//     // Execution
//     // const mappedProps = mapDispatchToProps(mockDispatch);
//     wrapper.find('button').at(0).simulate('click');

//     // Expectaion
//     expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
//   });
// });
