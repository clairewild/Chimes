import { connect } from 'react-redux';

import Collision from './collision.jsx';

const mapStateToProps = (state, ownProps) => ({
  pos: ownProps.pos
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Collision);
