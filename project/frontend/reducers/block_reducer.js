import merge from 'lodash/merge';

import { ADD_BLOCK, ROTATE_BLOCK, REVERSE_BLOCK, MOVE_BLOCK, TOGGLE_COLLISION, RESET } from '../actions/actions.js';

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
};

const offsets = {
  "up": [0, -1],
  "down": [0, 1],
  "left": [-1, 0],
  "right": [1, 0]
};

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
        direction: "up",
        collided: false
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
    case MOVE_BLOCK:
      block = newState[action.blockId];
      let dx = offsets[block.direction][0];
      let dy = offsets[block.direction][1];
      let x = block.pos[0];
      let y = block.pos[1];
      block.pos = [x + dx, y + dy];
      return newState;
    case TOGGLE_COLLISION:
      block = newState[action.blockId];
      if (block.collided) {
        block.collided = false;
      }
      else {
        block.collided = true;
      }
      return newState;
    case RESET:
      return {};
    default:
      return state;
  }
}

export default BlockReducer;
