import React, { Component } from "react";
import './style.css';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return <input className="input__task" placeholder={this.props.placeholder}></input>;
  }
}
