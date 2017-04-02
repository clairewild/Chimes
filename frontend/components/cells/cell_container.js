import { connect } from 'react-redux';

import { addBlock, hover } from '../../actions/actions.js';
import Cell from './cell.jsx';

const mapStateToProps = (state, ownProps) => ({
  pos: ownProps.pos
});

const mapDispatchToProps = dispatch => ({
  addBlock: pos => dispatch(addBlock(pos)),
  hover: pos => dispatch(hover(pos))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
