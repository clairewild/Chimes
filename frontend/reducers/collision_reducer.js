import merge from 'lodash/merge';

import { TOGGLE_COLLISION } from '../actions/actions.js';

const CollisionReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = merge([], state);

  switch(action.type) {
    case TOGGLE_COLLISION:

    default:
      return state;
  }
}

export default CollisionReducer;
