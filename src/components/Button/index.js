import React from "react";
import "./style.css";

export default function Button(props) {
  const {
    plus,
    completed,
    deleted,
    handleCompletedTask,
    handleAddTask,
    handleDeleteTask,
  } = props;
  if (plus) {
    return (
      <div className="btn btn__plus" onClick={handleAddTask}>
        +
      </div>
    );
  } else if (completed) {
    return (
      <div className="btn btn__completed" onClick={handleCompletedTask}>
        ✔
      </div>
    );
  } else if (deleted) {
    return (
      <div className="btn btn__delete" onClick={handleDeleteTask}>
        X
      </div>
    );
  }
}

