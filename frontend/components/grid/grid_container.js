import { connect } from 'react-redux';

import { hover, addBlock } from '../../actions/actions.js';
import Grid from './grid.jsx';

const mapStateToProps = state => ({
  cells: state.cells,
  blocks: state.blocks,
  hoverPos: state.hover
});

const mapDispatchToProps = dispatch => ({
  hover: pos => dispatch(hover(pos)),
  addBlock: pos => dispatch(addBlock(pos))
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
