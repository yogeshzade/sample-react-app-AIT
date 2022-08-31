import React, { useReducer } from 'react'

function UseReducer() {

    const reducer =(currentstate,action)=>{
        //console.log(action);
        switch(action.type){
            case "INCREMENT":
                return currentstate + action.payload;
            case "DECREMENT":
                return currentstate - action.payload;
            default: 
            return currentstate;
            }
        
        }

    const [count, dispatch]=useReducer(reducer, 0);

  return (
    <div>
        <h2>Use Reducer</h2>
        <p className='mt-2'>{count}</p>
        <div className='mt-2'>
        <button className='btn btn-info mx-3' onClick={()=>{dispatch({type:"INCREMENT", payload:100})}}>Increment</button>
        <button className='btn btn-info' onClick={()=>dispatch({type:"DECREMENT", payload:5})}>Decrement</button>

        </div>
    </div>
  )
}

export default UseReducer