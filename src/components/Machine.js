import React from 'react';

class Machine extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Matrix />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Machine;
