import { connect } from 'react-redux';

import Block from './block.jsx';

const mapStateToProps = (state, ownProps) => ({
  pos: ownProps.pos,
  direction: ownProps.direction
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Block);
