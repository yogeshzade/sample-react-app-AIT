import React,{Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            count:1,
            maxValue:20,
            minValue:0
        }
    }

    increment(){
        if(this.state.count < this.state.maxValue){
            this.setState({
                count:this.state.count+1
            });
        }
     
    }

    decrement(){
        if(this.state.count > this.state.minValue){
            this.setState({
                count:this.state.count-1
            });
        }
  
    }
    render(){
        return(
            <div>
                <h2>Counter:{this.state.count}</h2> 
                <button onClick={()=>{this.increment()}}>Add Value</button>
                <button onClick={()=>{this.decrement()}}>Remove Value</button>
            </div>
        );
            
        
    }
}

export default Counter;