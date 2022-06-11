import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
      fullName: "",
    };


  }
  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state)
  }
  handleChangeInput(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input
            placeholder="userName"
            name="userName"
            onChange={(event) => this.handleChangeInput(event)}
          ></input>
          <input
            placeholder="password"
            name="password"
            type={"password"}
            onChange={(event) => this.handleChangeInput(event)}
          ></input>
          <input
            placeholder="fullName"
            name="fullName"
            onChange={(event) => this.handleChangeInput(event)}
          ></input>
         <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
