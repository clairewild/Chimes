import { connect } from 'react-redux';

import { rotateBlock } from '../../actions/actions.js';
import Block from './block.jsx'

const mapStateToProps = (state, ownProps) => ({
  blockId: ownProps.id,
  pos: ownProps.pos,
  direction: ownProps.direction
});

const mapDispatchToProps = dispatch => ({
  rotateBlock: pos => dispatch(rotateBlock(pos))
});

export default connect(mapStateToProps, mapDispatchToProps)(Block);
