import merge from 'lodash/merge';

import { ADD_BLOCK, STEP, RESET } from '../actions/actions.js';

const BlockReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = merge([], state);
  switch(action.type) {
    case ADD_BLOCK:
      newState.push({
        pos: action.pos,
        direction: "up"
      });
      return newState;
    case STEP:
      return action.blocks;
    case RESET:
      return [];
    default:
      return state;
  }
}

export default BlockReducer;
