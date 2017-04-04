import { connect } from 'react-redux';

import { hover, addBlock } from '../../actions/actions.js';
import Cell from './cell.jsx';

const mapStateToProps = (state, ownProps) => ({
  pos: ownProps.pos
});

const mapDispatchToProps = dispatch => ({
  hover: pos => dispatch(hover(pos)),
  addBlock: pos => dispatch(addBlock(pos))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
