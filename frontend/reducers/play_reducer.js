import merge from 'lodash/merge';

import { TOGGLE_PLAY } from '../actions/actions.js';

const PlayReducer = (state = false, action) => {
  Object.freeze(state);
  switch(action.type) {
    case TOGGLE_PLAY:
      if (state) {
        return false;
      }
      else {
        return true;
      }
    default:
      return state;
  }
}

export default PlayReducer;
