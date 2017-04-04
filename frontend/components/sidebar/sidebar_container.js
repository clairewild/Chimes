import { connect } from 'react-redux';

import { rotateBlock, reverseBlock, moveBlock, reset } from '../../actions/actions.js';
import Sidebar from './sidebar.jsx';

const mapStateToProps = state => ({
  cells: state.cells,
  blocks: state.blocks
});

const mapDispatchToProps = dispatch => ({
  rotateBlock: blockId => dispatch(rotateBlock(blockId)),
  reverseBlock: blockId => dispatch(reverseBlock(blockId)),
  moveBlock: blockId => dispatch(moveBlock(blockId)),
  reset: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
