export const characters = (state = [], action) => {
  switch (action.type) {
    case 'SET_PEOPLE':
      return action.people
    default: 
      return state
  }
}