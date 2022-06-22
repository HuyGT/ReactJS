import React, { useEffect } from "react";
import { useState } from "react";
import { limitTasks } from "./Constants";
import "./App.css";
import Button from "./components/Button";
import Divider from "./components/Divider";
import HeaderTitle from "./components/HeaderTitle";
import Input from "./components/Input";
import List from "./components/List";
import Pagination from "./components/Pagination";
import {
  addTask,
  completedTask,
  deleteTask,
  getAllTasks,
  getTaskById,
} from "./api/taskApi";

export default function App() {
  const [listTasks, setListTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    handleGetAllTasks();
  }, []);

  const handleGetAllTasks = async () => {
    try {
      const data = await getAllTasks();
      data && setListTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeInput = (e) => {
    setTaskName(e.target.value);
  };
  const handleAddTask = async () => {
    if (taskName.trim()) {
      let newTask = {
        id: new Date().getTime(),
        taskName: taskName,
        isCompleted: false,
      };
      try {
        await addTask(newTask);
        await handleGetAllTasks();
      } catch (error) {
        console.log(error);
      } finally {
        setTaskName("");
      }
    } else {
      return;
    }
  };
  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    await handleGetAllTasks();
  };
  const handleCompletedTask = async (id) => {
    try {
      const taskById = await getTaskById(id);
      await completedTask(id, { ...taskById, isCompleted: true });
      await handleGetAllTasks();
    } catch (error) {
      console.log(error);
    }
  };
  const getTaskInCurrentPage = () => {
    const startIndex = currentPage * limitTasks - limitTasks;
    return [...listTasks.slice(startIndex, startIndex + limitTasks)];
  };
  const handleSetCurrentPage = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="App">
      <HeaderTitle title="TO DO LIST APPLICATION" />
      <div className="addTask">
        <Input
          placeholder="Add new task"
          handleChangeInput={(e) => handleChangeInput(e)}
          value={taskName}
        />
        <Button plus handleAddTask={(e) => handleAddTask(e)} />
      </div>
      <Divider fullWidth />
      <List
        listTasks={getTaskInCurrentPage()}
        handleDeleteTask={handleDeleteTask}
        handleCompletedTask={handleCompletedTask}
      />
      <Divider fullWidth />
      <Pagination
        currentPage={currentPage}
        taskLists={listTasks}
        limit={limitTasks}
        handleSetCurrentPage={handleSetCurrentPage}
      />
    </div>
  );
}
