import React from 'react';
import {Provider,Consumer} from './Context';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      count:0,
    }
  }

  addOne=()=>{
    this.setState(preState=>({
      count:preState.count + 1,
    }))
  }

  render() {
    return (
      <div>
        <Provider value={this.state}>
          <Consumer>
            {(context)=><p>{context.count}</p>}
          </Consumer>
        </Provider>
        <input type='button' value='加1' onClick={()=>this.addOne()}/>
      </div>
    )
  }
}

export default App;

