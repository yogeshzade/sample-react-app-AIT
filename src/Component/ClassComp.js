import React, {Component} from 'react';

class ClassComp extends Component{
    render(props){
        return (
            <div>
                <h2>This is Class component</h2>
                <h2>Location: {this.props.location}</h2>
                <h2>Timing: {this.props.timing}</h2>
            </div>


        );
    }
}

export default ClassComp;