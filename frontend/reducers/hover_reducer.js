import merge from 'lodash/merge';

import { HOVER } from '../actions/actions.js';

const HoverReducer = (state = [null, null], action) => {
  Object.freeze(state);
  switch(action.type) {
    case HOVER:
      return action.pos;
    default:
      return state;
  }
}

export default HoverReducer;
