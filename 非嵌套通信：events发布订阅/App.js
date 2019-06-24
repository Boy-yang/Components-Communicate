import React from 'react';
import emitter from './Event';
import Custom1 from './Costom1';
import Custom2 from './Costom2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '非嵌套组件通信 之 发布订阅模式',
    }
  }
  handleClick() {
  //emit事件触发方法,通过事件名称找对应的事件处理函数callCustom，将事件处理函数作为参数传入
    emitter.emit('callCustom', this.state.msg);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick()}>点击发布事件</button>
        <Custom1 />
        <Custom2 />
      </div>
    )
  }
}

export default App;

