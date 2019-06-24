import React,{Component} from "react";
class Child extends Component{
    constructor(props){
        super(props);
        this.state={
            data:'我是子组件中的数据'
        }
    }
    handleClick=(e)=>{
        const {data} = this.state;
        this.props.callback(data)
    }

    render(){
        return (
          <button onClick={e=>this.handleClick(e)}>点击</button>
        )
    }
}

 
export default Child;