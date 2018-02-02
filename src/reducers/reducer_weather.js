import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ]; // ...state is cool ES6 syntax
      // how to build a list?
      // NOTE 1:
      //   "never set state equal to something, you need to call setState()"
      //   so you can't just do state.push(new_city);
      //   instead return a new array entirely.
  }
  return state;
}