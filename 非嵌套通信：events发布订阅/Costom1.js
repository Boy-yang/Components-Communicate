import React from 'react';
import emitter from './Event.js';

class Custom1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        }
    }

    componentDidMount() { //组件挂载时声明一个自定义事件
        emitter.addListener('callCustom', (msg) => {
            this.setState({
                msg: 'Custom1收到消息--' + msg
            });
        })
    }

    componentWillUnmount() { //组件销毁前移除事件监听
        emitter.removeListener('callCustom', (msg) => {
            this.setState({
                msg: 'Custom1即将销毁此消息--' + msg
            });
        })
    }

    //订阅者1消息显示
    render() {
        const {msg}=this.state;
        return (
            <p style={{ color: 'red' }}>
                {msg}
            </p>)
    }
}
export default Custom1;