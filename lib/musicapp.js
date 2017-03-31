import Grid from './grid.js';
import GridView from './grid_view.js';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  canvas.width = Grid.DIM_X;
  canvas.height = Grid.DIM_Y;

  const ctx = canvas.getContext("2d");
  const grid = new Grid;
  const gv = new GridView(grid, ctx);
  gv.start();
});
