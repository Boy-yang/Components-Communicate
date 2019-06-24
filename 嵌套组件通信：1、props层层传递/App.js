import React, { Component } from 'react';
import Child from './Child';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      color:'green',
    }
  }
  render() {
    const {color}=this.state;
    return (
      <div className="App">
        <Child theme={color}/>
      </div>
    )
  }
}


export default App;
