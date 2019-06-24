import React, { Component } from 'react';
import Child from './Child';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:null,
    }
  }

  callback=(ChildData)=>{
    this.setState({
      data:ChildData
    })
  }
  render() {
    const {data}=this.state;
    return (
      <div className="App">
        <h1>获取数据：{data}</h1>
        <Child callback={this.callback} />
      </div>
    )
  }


}


export default App;
