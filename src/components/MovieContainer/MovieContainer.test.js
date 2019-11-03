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
})




//     it('should match a snapshot', () => {
//       expect(wrapper).toMatchSnapshot();
//     });

//     it('should render an error message', () => {
//       wrapper = shallow(<MovieContainer
//         movies={[{
//           title: 'Wicked',
//           release_date: '2017',
//           average_rating: 6.5,
//           popularity: 55.55,
//           id: 5
//         },
//         {
//           title: 'Joker',
//           release_date: '2019',
//           average_rating: 7.5,
//           popularity: 68.55,
//           id: 6
//         }]}
//         errorMsg='This is an error'
//         handleFavorite={mockHandleFavorite}
//       />)

//       expect(wrapper).toMatchSnapshot();
//     });
//   });

//   describe('mapStateToProps', () => {
//     it('should return an object with the todos array', () => {
//       // Setup
//       const mockState = {
//         movies: [{
//           title: 'Wicked',
//           release_date: '2017',
//           average_rating: 6.5,
//           popularity: 55.55,
//           movie_id: 5
//         },
//         {
//           title: 'Joker',
//           release_date: '2019',
//           average_rating: 7.5,
//           popularity: 68.55,
//           movie_id: 6
//         }],
//         user: {
//           name: 'Pol',
//           id: 2,
//           isSignedIn: true
//         },
//         errorMsg: ''

//       };
//       const expected = {
//         movies: [{
//           title: 'Wicked',
//           release_date: '2017',
//           average_rating: 6.5,
//           popularity: 55.55,
//           movie_id: 5
//         },
//         {
//           title: 'Joker',
//           release_date: '2019',
//           average_rating: 7.5,
//           popularity: 68.55,
//           movie_id: 6
//         }],
//         errorMsg: ''
//       };

//       // Execution
//       const mappedProps = mapStateToProps(mockState);

//       // Expectation
//       expect(mappedProps).toEqual(expected);
//     });
//   });

// })