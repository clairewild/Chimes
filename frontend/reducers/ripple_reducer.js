import merge from 'lodash/merge';

import { ADD_RIPPLE, DELETE_RIPPLE, RESET } from '../actions/actions.js';

const RippleReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  let key = String(action.pos)
  switch(action.type) {
    case ADD_RIPPLE:
      newState[key] = {
        pos: action.pos
      };
      return newState;
    case DELETE_RIPPLE:
      delete newState[key];
      return newState;
    case RESET:
      return {};
    default:
      return state;
  }
}

export default RippleReducer;
