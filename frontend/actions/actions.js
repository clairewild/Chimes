export const ADD_BLOCK = "ADD_BLOCK";
export const ROTATE_BLOCK = "ROTATE_BLOCK";
export const REVERSE_BLOCK = "REVERSE_BLOCK";
export const MOVE_BLOCK = "MOVE_BLOCK";
export const ADD_COLLISION = "TOGGLE_COLLISION";
export const DELETE_COLLISION = "DELETE_COLLISIONS";
export const ADD_RIPPLE = "ADD_RIPPLE";
export const DELETE_RIPPLE = "DELETE_RIPPLE";
export const RESET = "RESET";
export const HOVER = "HOVER";

export const addBlock = pos => ({
  type: ADD_BLOCK,
  pos
});

export const rotateBlock = blockId => ({
  type: ROTATE_BLOCK,
  blockId
});

export const reverseBlock = blockId => ({
  type: REVERSE_BLOCK,
  blockId
});

export const moveBlock = blockId => ({
  type: MOVE_BLOCK,
  blockId
});

export const addCollision = pos => ({
  type: ADD_COLLISION,
  pos
});

export const deleteCollision = pos => ({
  type: DELETE_COLLISION,
  pos
});

export const addRipple = pos => ({
  type: ADD_RIPPLE,
  pos
});

export const deleteRipple = pos => ({
  type: DELETE_RIPPLE,
  pos
});

export const reset = () => ({
  type: RESET
});

export const hover = pos => ({
  type: HOVER,
  pos
});
