import { connect } from 'react-redux';

import { rotateBlock, reverseBlock, moveBlock, addCollision, addRipple, reset } from '../../actions/actions.js';
import Sidebar from './sidebar.jsx';

const mapStateToProps = state => ({
  blocks: state.blocks,
  collisions: state.collisions
});

const mapDispatchToProps = dispatch => ({
  rotateBlock: blockId => dispatch(rotateBlock(blockId)),
  reverseBlock: blockId => dispatch(reverseBlock(blockId)),
  moveBlock: blockId => dispatch(moveBlock(blockId)),
  addCollision: pos => dispatch(addCollision(pos)),
  addRipple: pos => dispatch(addRipple(pos)),
  reset: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
