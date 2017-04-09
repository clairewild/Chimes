import { connect } from 'react-redux';

import Cell from './cell.jsx';

const mapStateToProps = (state, ownProps) => ({
  pos: ownProps.pos
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
