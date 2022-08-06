import React from 'react';

const FunComp = (props) =>{
    return (
        <div className='App'>
        
            <h2>The duration of the {props.name} course is {props.duration}.</h2>
            <h2>Function Component in {props.name}</h2>
        </div>
    );
}

export default FunComp;