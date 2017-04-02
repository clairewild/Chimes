export const ADD_BLOCK = "ADD_BLOCK";
export const STEP = "STEP";
export const RESET = "RESET";
export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const HOVER = "HOVER";

export const addBlock = pos => ({
  type: ADD_BLOCK,
  pos
});

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
