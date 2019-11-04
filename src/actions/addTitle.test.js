import * as actions from '../actions'

describe('addTitleAndPlot actions', () => {
  it.skip('should have a type of ADD_TITLE_AND_PLOT and a title, plot, and score as payload', () => {
    const inputObject = {
      title: 'here is a title',
      plot: 'this is my plot',
      score: 2
    }

    const expectedAction = {
      type: 'ADD_TITLE_AND_PLOT',
      title,
      plot,
      score
    }

    expect(actions.addTitleAndPlot(inputObject)).toEqual(expectedAction)
  })
})