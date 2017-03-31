import { connect } from 'react-redux';

import { addBlock } from '../../actions/actions.js';
import Cell from './cell.jsx';

const mapStateToProps = (state, ownProps) => ({
  pos: ownProps.pos
});

const mapDispatchToProps = dispatch => ({
  addBlock: pos => dispatch(addBlock(pos))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
