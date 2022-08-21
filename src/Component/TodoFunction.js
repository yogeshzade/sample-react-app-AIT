import React from 'react'

function TodoFunction() {
  return (
    <div class="container">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6 mt-5">
            <h3>TODO Lists Function Component</h3>
            <div class="field">
            <input
              type="text"
              class="form-control"
              value=""
              name="nameofList"
              placeholder="Add Name"
            />
            <button type="button" class="btn btn-primary mt-2 mb-3">Add a Name</button>
            <ul>
            </ul>
            </div>
           
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
  )
}

export default TodoFunction