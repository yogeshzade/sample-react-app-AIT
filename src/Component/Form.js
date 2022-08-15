import React, { Component } from "react";

class Form extends Component {

  state ={
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    firstNameErr:"",
    lastNameErr:"",
    emailErr:"",
    passwordErr:""
  }


  handleChange=(e)=>{
    const {name,value} = e.target;
    this.setState({[name]:value});
    console.log(this.state)
  };

  handleSubmit=(e)=>{
    e.preventDefault();
    this.validateForm();
  }

  validateForm=()=>{
    let firstNameErr="";
    let lastNameErr="";
    let emailErr="";
    let passwordErr="";

    if(this.state.firstName.length<4){
      firstNameErr = "First Name should be atleast 4 characters";
    }
    if(this.state.lastName.length<3){
      lastNameErr = "Last  Name should be atleast 3 characters";
    }
    if(!this.state.email.includes('@')){
      emailErr="please Enter a valid email";
    }
    if(this.state.password.length<5){
      passwordErr = "password should have at least 5 char";
    }


    if(firstNameErr || lastNameErr || emailErr || passwordErr){
      this.setState({firstNameErr,lastNameErr,emailErr,passwordErr})
    }else{
      this.setState({firstNameErr,lastNameErr,emailErr,passwordErr})
    }
      
  }

  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="FirstName"
                  class="form-control mb-3"
                  onChange={this.handleChange}
                />
                <p className="text-danger">{this.state.firstNameErr}</p>
                <input
                  type="text"
                  name="lastName"
                  placeholder="LastName"
                  class="form-control mb-3"
                  onChange={this.handleChange}
                />
                <p className="text-danger">{this.state.lastNameErr}</p>

                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  class="form-control mb-3"
                  onChange={this.handleChange}
                />
                <p className="text-danger">{this.state.emailErr}</p>

                <input
                  type="password"
                  name="password"
                  class="form-control mb-3"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
                <p className="text-danger">{this.state.passwordErr}</p>

                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
