import { MovieContainer, mapStateToProps } from './MovieContainer';
import { shallow } from 'enzyme';
import React from 'react';

describe('MovieContainer', () => {
  describe('MovieContainer component', () => {
    let wrapper;
    beforeEach(() => {
      const mockMovies = [
        {
          title: 'A Film',
          description: 'it is riveting',
          release_date: '2019',
          rt_score: 22
        },
        {
          title: 'A Movie',
          description: 'it is not as riveting',
          release_date: '2018',
          rt_score: 11
        }
      ]
      wrapper = shallow(<MovieContainer
          movies={mockMovies}
         />)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })
  })
  describe('mapStateToProps', () => {
    it('should return an object with the movies array', () => {
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
        ]
      }
      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expectedState)
    })
  })
})
