import React from 'react';

class Column extends React.Component {
  renderTile(i) {
    return <Tile />;
  }
  render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderTile(0)}
          {this.renderTile(1)}
          {this.renderTile(2)}
        </div>
      </div>
    );
  }
}

export default Column;
