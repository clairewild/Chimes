import { connect } from 'react-redux';

import { deleteRipple } from '../../actions/actions.js';
import Ripple from './ripple.jsx';

const mapStateToProps = (state, ownProps) => ({
  pos: ownProps.pos
});

const mapDispatchToProps = dispatch => ({
  deleteRipple: pos => dispatch(deleteRipple(pos))
});

export default connect(mapStateToProps, mapDispatchToProps)(Ripple);
