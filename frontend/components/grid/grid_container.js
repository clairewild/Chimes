import { connect } from 'react-redux';

import { addBlock, rotateBlock, toggleCollision, hover } from '../../actions/actions.js';
import Grid from './grid.jsx';

const mapStateToProps = state => ({
  cells: state.cells,
  blocks: state.blocks,
  hoverPos: state.hover,
  collisions: state.collisions
});

const mapDispatchToProps = dispatch => ({
  addBlock: pos => dispatch(addBlock(pos)),
  rotateBlock: blockId => dispatch(rotateBlock(blockId)),
  toggleCollision: pos => dispatch(toggleCollision(pos)),
  hover: pos => dispatch(hover(pos))
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
