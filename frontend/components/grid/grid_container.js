import { connect } from 'react-redux';

import { hover, addBlock, rotateBlock } from '../../actions/actions.js';
import Grid from './grid.jsx';

const mapStateToProps = state => ({
  cells: state.cells,
  blocks: state.blocks,
  hoverPos: state.hover
});

const mapDispatchToProps = dispatch => ({
  hover: pos => dispatch(hover(pos)),
  addBlock: pos => dispatch(addBlock(pos)),
  rotateBlock: blockId => dispatch(rotateBlock(blockId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
