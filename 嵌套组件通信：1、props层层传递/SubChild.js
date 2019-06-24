import React,{Component} from "react";

class SubChild extends Component{
    constructor(props){
        super(props);
        this.state={
            color:this.props.theme
        }
    }
  
    render(){
        const {color}=this.state;
        return (
          <div>
              <button style={{color}}>点我点我</button>
          </div>
        )
    }
}

export default SubChild;