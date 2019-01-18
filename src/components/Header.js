import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div>
          <h1>Colour Click</h1>
          <div style={width}>
            <h5>{this.props.ins}</h5>
          </div>
          <h2>Score: {this.props.score}</h2>
          <h2>Lives: {this.props.lives}</h2>
      </div>
    )
  }
}

const width = {
    width: '75%',
    margin: '0 auto'
}

export default Header;
