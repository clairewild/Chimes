import { ADD_COLLISION, RESET } from '../actions/actions.js';

const CollisionReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case ADD_COLLISION:
      return [{
        pos: action.pos
      }];
    case RESET:
      return [];
    default:
      return state;
  }
}

export default CollisionReducer;
