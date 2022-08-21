import React, { Component } from "react";

class TodoClass extends Component {
  state = {
    nameOfList: "",
    lists: [],
  };
  handleChange(e) {
    this.setState({
      nameOfList: e.target.value,
    });
  }

  handleAddClick() {
    if (!this.state.nameOfList.length) {
      return false;
    }
    this.setState({
      nameOfList: "",
      lists: [...this.state.lists, this.state.nameOfList],
    });
  }
  render() {
    console.log(this.state);
    console.log(this.values);
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6 mt-5">
            <h3>TODO Lists Class Component</h3>
            <div class="field">
            <input
              type="text"
              class="form-control"
              value={this.state.nameOfList}
              onChange={this.handleChange.bind(this)}
              name="nameofList"
              placeholder="Add Name"
            />
            <button type="button" onClick={this.handleAddClick.bind(this)} class="btn btn-primary mt-2 mb-3">Add a Name</button>
            <ul>
              {this.state.lists.map((data, key) => (
                <li key={key}>{data}</li>
              ))}
            </ul>
            </div>
           
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    );
  }
}

export default TodoClass;
