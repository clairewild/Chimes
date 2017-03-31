import { connect } from 'react-redux';

import Grid from './grid.jsx';

const mapStateToProps = state => ({
  cells: state.cells,
  blocks: state.blocks
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
