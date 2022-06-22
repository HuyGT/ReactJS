import React from "react";
import ListItem from "./ListItem";

export default function List(props) {
    const { listTasks, handleDeleteTask, handleCompletedTask } = props;
return (
    <>
      <div className="list-wrapper">
        {listTasks.map((item) => {
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


