import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar">
        <p>This is the sidebar!</p>
        <button onClick={ this.handlePlay }>Play Temp Button</button>
      </div>
    )
  }
}

export default Sidebar;
