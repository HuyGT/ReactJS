import React from "react";
import Button from "../Button";
import Divider from "../Divider";
import ListContent from "./ListContent";
import "./style.css";

export default function ListItem(props) {
  const { task, handleCompletedTask, handleDeleteTask } = props;
  return (
    <>
      <div className="list-item">
        <div>
          <ListContent content={task.taskName} status={task.isCompleted} />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ display: task.isCompleted ? "none" : "block" }}>
            <Button
              completed
              handleCompletedTask={() => handleCompletedTask(task.id)}
            />
          </div>

          <Button deleted handleDeleteTask={() => handleDeleteTask(task.id)} />
        </div>
      </div>
      <Divider />
    </>
  );
}
