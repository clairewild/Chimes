import merge from 'lodash/merge';

import { ADD_COLLISION, DELETE_COLLISIONS, RESET } from '../actions/actions.js';

const CollisionReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = merge([], state);
  switch(action.type) {
    case ADD_COLLISION:
      newState.push({
        pos: action.pos
      });
      return newState;
    case DELETE_COLLISIONS:
      return [];
    case RESET:
      return [];
    default:
      return state;
  }
}

export default CollisionReducer;
