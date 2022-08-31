import React, { useEffect, useRef } from 'react'

function UseRef() {

    const userdata= useRef(null);
    //console.log(userdata.current.value);

   const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(userdata.current.value="welcome");
    }

    useEffect(()=>{
        userdata.current.focus();
    },[])

  return (
    <div>
    <h2>Yogesh</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" ref={userdata} placeholder='Enter Name'></input>
        <button>Submit</button>
    </form>
    </div>
  )
}

export default UseRef;