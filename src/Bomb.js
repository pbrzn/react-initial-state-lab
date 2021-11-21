import React, { Component } from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount,
    }
  }

  goBoom = () => {
    if (this.state.secondsLeft === 0) {
      return <h2>Boom!</h2>;
    } else { return <h2>{this.state.secondsLeft} seconds left before I go boom!</h2> }
  }

  render() {
    return <div>{this.goBoom()}</div>
  }
}
