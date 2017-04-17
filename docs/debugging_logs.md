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

Bug:
- trying to render collisions
- started off rendering collision component in oneStep method in Sidebar, where blocks move
- dispatching an action to add collision
- collisions rendered a space behind where the blocks had just been instead of where they were going to collide
- didn't work because that method all happens at once and then waits before rendering, setInterval

Solution:
- wrote a willCollide method
- lots of refactoring, decided to checkCollisions before iterating through all blocks to check other things and move them
- worked, but Collision components would be added and then never disappear
- dispatched deleteCollision action when blocks actually collided
- because of lag sometimes didn't happen fast enough and Collision elements would still build up when there were too many blocks
- solved by having the Collision components delete themselves after a setTimeout that was the same length as the onStep interval (how long it takes for the blocks to move)
