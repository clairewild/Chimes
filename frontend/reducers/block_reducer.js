import merge from 'lodash/merge';

import { ADD_BLOCK, ROTATE_BLOCK, REVERSE_BLOCK, STEP, RESET } from '../actions/actions.js';

const rotated = {
  "up": "right",
  "right": "down",
  "down": "left",
  "left": "up"
};

const reversed = {
  "up": "down",
  "down": "up",
  "left": "right",
  "right": "left"
}

const BlockReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  let block;
  switch(action.type) {
    case ADD_BLOCK:
      let id = Object.keys(newState).length;
      block = {
        id: id,
        pos: action.pos,
        direction: "up"
      };
      newState[id] = block;
      return newState;
    case ROTATE_BLOCK:
      block = newState[action.blockId];
      block.direction = rotated[block.direction];
      return newState;
    case REVERSE_BLOCK:
      block = newState[action.blockId];
      block.direction = reversed[block.direction];
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
