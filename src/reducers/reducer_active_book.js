// State arg is not application state, only the state
// this reducer is responsible for

// 'state = null' if undefined, set it to null
// since redux doesn't like reducers returning a state that is undefined
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload; // return a fresh object
    default:
      return state;
  }
}