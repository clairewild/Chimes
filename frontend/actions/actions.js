export const ADD_BLOCK = "ADD_BLOCK";
export const STEP = "STEP";
export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const RESET = "RESET";

export const addBlock = pos => ({
  type: ADD_BLOCK,
  pos
});

export const step = (cells, blocks) => ({
  type: STEP,
  cells,
  blocks
});

export const togglePlay = () => ({
  type: TOGGLE_PLAY
});

export const reset = () => ({
  type: RESET
});
