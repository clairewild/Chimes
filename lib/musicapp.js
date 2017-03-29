import Grid from './grid.js';
import GridView from './grid_view.js';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const grid = new Grid(canvas);

  new GridView(grid).start();
});
