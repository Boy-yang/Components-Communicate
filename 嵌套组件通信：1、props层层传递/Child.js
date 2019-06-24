import React,{Component} from "react";
import SubChild from './SubChild';

class Child extends Component{
    constructor(props){
        super(props);
        this.state={
            color:this.props.theme
        };
    }

    render(){
        return (
          <SubChild theme={this.state.color}/>
        )
    }
}

 
export default Child;