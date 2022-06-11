import React, { Component } from "react";
import Button from "../Button";
import Divider from "../Divider";
import ListContent from "./ListContent";
import "./style.css";
import { listTasks } from "../../Constants";

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      listTasks: listTasks,
      taskId: "",
    };
  }
  handleDeleteTask(e) {
    console.log(this.props.key);
  }
  render() {
    const { task , handleCompletedTask , handleDeleteTask } = this.props;

    return (
      <>
        <div className="list-item">
          <div>
            <ListContent content={task.taskName} status={task.isCompleted} />
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ display: task.isCompleted ? "none" : "block"}}>
              <Button
                completed
                handleCompletedTask={() => handleCompletedTask(task.id)}
              />
            </div>

            <Button
              deleted
              handleDeleteTask={() => handleDeleteTask(task.id)}
            />
          </div>
        </div>
        <Divider />
      </>
    );
  }
}
