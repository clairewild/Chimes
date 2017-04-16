import { connect } from 'react-redux';

import { deleteCollision } from '../../actions/actions.js';
import Collision from './collision.jsx';

const mapStateToProps = (state, ownProps) => ({
  pos: ownProps.pos
});

const mapDispatchToProps = dispatch => ({
  deleteCollision: pos => dispatch(deleteCollision(pos))
});

export default connect(mapStateToProps, mapDispatchToProps)(Collision);
