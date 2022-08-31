import React, { useState } from "react";

function TodoFunction() {
  const [task, setTask] = useState("");
  const [tasklist, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const AddTask = () => {
    //console.log(task);
    if (task !== "") {
      const taskDetails = {
        value: task,
      };
     
      setTaskList([...tasklist, taskDetails]);
     
    }
    
  };
 
  return (
    <div class="container">
    <div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6">
    <h3>TODO Lists Function Component</h3>
    <input
        type="text"
        name="text"
        class="form-control"
        onChange={(e) => handleChange(e)}
        placeholder="Add Name"
      />
      <button className="btn btn-success mt-2 mb-3" onClick={AddTask}>
        Add a Name
      </button>

    {tasklist !==[] ? 
    
    <ul>
        {tasklist.map(t=>(
            <li>{t.value}</li>
        ))}
    </ul>
    
    : null}

    </div>
    <div class="col-md-3"></div>
    </div>
      
    </div>
  );
}

export default TodoFunction;
