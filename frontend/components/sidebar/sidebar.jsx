 import React from 'react';
import merge from 'lodash/merge';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalHandler: null,
      sidebarOpen: true
    };
    this.oneStep = this.oneStep.bind(this);
    this.isCollided = this.isCollided.bind(this);
    this.isHittingWall = this.isHittingWall.bind(this);
    this.playSound = this.playSound.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  oneStep() {
    const blocks = this.props.blocks;
    const blockKeys = Object.keys(blocks);
    let block;

    blockKeys.forEach(key => {
      block = blocks[key];

      if (this.isCollided(blocks, blockKeys, block)) {
        this.props.rotateBlock(block.id);
      }
      else if (this.isHittingWall(block)) {
        this.playSound(block.pos);
        this.props.reverseBlock(block.id);
      }
      this.props.moveBlock(block.id);
    });
  }

  isCollided(blocks, blockKeys, block) {
    let x = block.pos[0];
    let y = block.pos[1];
    let res = false;
    blockKeys.forEach(key => {
      if (key != block.id) {
        if (blocks[key].pos[0] === x && blocks[key].pos[1] === y) {
          res = true;
        }
      }
    });
    return res;
  }

  isHittingWall(block) {
    let x = block.pos[0];
    let y = block.pos[1];
    let dir = block.direction;
    if (dir === "up" || dir === "down") {
      return (y === 0 || y === 8);
    }
    else {
      return (x === 0 || x === 8);
    }
  }

  playSound(pos) {
    let soundFile;
    if (pos[0] === 0 || pos[0] === 8) {
      soundFile = SOUNDS[pos[1]];
    }
    else {
      soundFile = SOUNDS[pos[0]];
    }
    let note = new Audio(soundFile);
    note.volume = 0.1;
    note.play();
  }

  togglePlay() {
    if (this.state.intervalHandler) {
      window.clearInterval(this.state.intervalHandler);
      this.setState({ intervalHandler: null });
    }
    else {
      const handler = window.setInterval(this.oneStep, 250);
      this.setState({ intervalHandler: handler });
    }
  }

  toggleSidebar() {
    if (this.state.sidebarOpen) {
      this.setState(sidebarOpen: false);
    }
    else {
      this.setState(sidebarOpen: true);
    }
  }

  render() {
    const buttonImg = (this.state.intervalHandler) ? "../../../assets/images/pause.png" : "../../../assets/images/play-button.png";

    if (this.state.sidebarOpen) {
      return (
        <div>
          <i className="fa fa-bars" onClick={ this.toggleSidebar } aria-hidden="true"></i>
          <div className="sidebar">
            <p>This is the sidebar!</p>
            <img className="play-button" onClick={ this.togglePlay } src={ buttonImg } />
            <button className="reset-button" onClick={ this.props.reset }>Reset</button>
          </div>
        </div>
      );
    }
    else {
      return (<i className="fa fa-bars" onClick={ this.toggleSidebar } aria-hidden="true"></i>);
    }
  }
}

const SOUNDS = {
  0: "../../assets/sounds/e-note.mp3",
  1: "../../assets/sounds/a-note.mp3",
  2: "../../assets/sounds/b-note.mp3",
  3: "../../assets/sounds/d-note.mp3",
  4: "../../assets/sounds/highe-note.mp3",
  5: "../../assets/sounds/g-note.mp3",
  6: "../../assets/sounds/higha-note.mp3",
  7: "../../assets/sounds/highb-note.mp3",
  8: "../../assets/sounds/highd-note.mp3"
};

export default Sidebar;
