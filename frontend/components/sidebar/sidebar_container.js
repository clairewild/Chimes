import { connect } from 'react-redux';

import { rotateBlock, reverseBlock, moveBlock, step, reset, togglePlay } from '../../actions/actions.js';
import Sidebar from './sidebar.jsx';

const mapStateToProps = state => ({
  cells: state.cells,
  blocks: state.blocks,
  play: state.play
});

const mapDispatchToProps = dispatch => ({
  rotateBlock: blockId => dispatch(rotateBlock(blockId)),
  reverseBlock: blockId => dispatch(reverseBlock(blockId)),
  moveBlock: blockId => dispatch(moveBlock(blockId)),
  step: blocks => dispatch(step(blocks)),
  reset: () => dispatch(reset()),
  togglePlay: () => dispatch(togglePlay())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
