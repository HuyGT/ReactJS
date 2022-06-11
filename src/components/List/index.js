import React, { Component } from "react";
import ListItem from "./ListItem";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { listTasks, handleDeleteTask, handleCompletedTask } = this.props;
    return (
      <>
        <div className="list-wrapper">
          {listTasks.map((item, key) => {
            return (
              <ListItem
                key={item.id}
                task={item}
                handleDeleteTask={handleDeleteTask}
                handleCompletedTask={handleCompletedTask}
              />
            );
          })}
        </div>
      </>
    );
  }
}
