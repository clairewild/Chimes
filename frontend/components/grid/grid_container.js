import { connect } from 'react-redux';

import { addBlock, rotateBlock, hover } from '../../actions/actions.js';
import Grid from './grid.jsx';

const mapStateToProps = state => ({
  cells: state.cells,
  blocks: state.blocks,
  hoverPos: state.hover,
  collisions: state.collisions,
  ripples: state.ripples
});

const mapDispatchToProps = dispatch => ({
  addBlock: pos => dispatch(addBlock(pos)),
  rotateBlock: blockId => dispatch(rotateBlock(blockId)),
  hover: pos => dispatch(hover(pos))
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
