Bug:
- grid of cells, konva element, with lots of rectangle konva elements inside
- cells had mouseover, mouse leave, and click handlers for rendering a hover element showing where your mouse was, and for adding blocks
- hover element would flicker, and you sometimes had to click several times to add a block

Solution:
- first tried moving handlers to hover component, that didn't work
- talked to a friend who'd also used the same library, and he suggested putting the mouse enter, mouse leave, and click handlers on the canvas element itself instead of the nested cells
- had to write a helper function to find the position of the mouse and then calculate the x, y coordinates of the block, since the grid component didn't have access to the position of that particular cell already
- stopped the flickering, and could add blocks, but blocks would no longer rotate
- put a debugger in the block onClick handler, and it was still hitting it
- put store on window, and checked the store's state in dev tools
- turns out I had loads of blocks, way more than I should have, because every time I clicked on a block, I was also clicking on the canvas and creating a new block over the original one
- why you couldn't see that the block was rotating, there was another on top of it
- moved all my click handlers to the grid component file, checking to see if there was already a block at that position
- if there was, I'd rotate it, if not, I'd add a new block
