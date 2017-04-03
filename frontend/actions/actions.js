export const ADD_BLOCK = "ADD_BLOCK";
export const ROTATE_BLOCK = "ROTATE_BLOCK";
export const REVERSE_BLOCK = "REVERSE_BLOCK";
export const STEP = "STEP";
export const RESET = "RESET";
export const TOGGLE_PLAY = "TOGGLE_PLAY";
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
})

export const step = blocks => ({
  type: STEP,
  blocks
});

export const reset = () => ({
  type: RESET
});

export const togglePlay = () => ({
  type: TOGGLE_PLAY
});

export const hover = pos => ({
  type: HOVER,
  pos
})
