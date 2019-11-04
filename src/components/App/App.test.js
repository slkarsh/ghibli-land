import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { shallow } from 'enzyme'

describe('App', () => {
  describe('App component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<App />)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
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
