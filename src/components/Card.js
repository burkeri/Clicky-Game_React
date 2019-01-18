import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
        <div
            className="card" 
            style={{backgroundColor: this.props.style}}
            onClick={() => this.props.handleClick((this.props.id), (this.props.arr))}
        >
        </div>
    )
  }
}

export default Card;
