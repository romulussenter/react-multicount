import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      count: 0
    }

    this.increment = this.increment.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment(value){
    this.setState({count: this.state.count + value});
  }
  reset(){
    this.setState({count: 0});
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <div>
          <button onClick={() => this.increment(1)}>1</button>
          <button onClick={() => this.increment(2)}>2</button>
          <button onClick={() => this.increment(3)}>3</button>
        </div>
        <div>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
