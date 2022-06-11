import React, { Component } from "react";
import "./style.css";
export default class Button extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const {
      plus,
      completed,
      deleted,
      handleCompletedTask,
      handleAddTask,
      handleDeleteTask,
    } = this.props;
    if (plus) {
      return (
        <div className="btn btn__plus" onClick={handleAddTask}>
          +
        </div>
      );
    } else if (completed) {
      return (
        <div
          className="btn btn__completed"
          onClick={handleCompletedTask}
        >
          ✔
        </div>
      );
    } else if (deleted) {
      return (
        <div className="btn btn__delete" onClick={handleDeleteTask} >
          X
        </div>
      );
    }
  }
}
