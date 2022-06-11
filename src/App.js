import "./App.css";
import Button from "./components/Button";
import Divider from "./components/Divider";
import HeaderTitle from "./components/HeaderTitle";
import Input from "./components/Input";
import List from "./components/List";
import Pagination from "./components/Pagination";
import { listTasks , limitTasks } from "./Constants";

import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      listTasks: listTasks,
      taskName: "",
      currentPage: 1,
    };
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleCompletedTask = this.handleCompletedTask.bind(this);
    this.handleSetCurrentPage = this.handleSetCurrentPage.bind(this);
    this.getTaskInCurrentPage = this.getTaskInCurrentPage.bind(this);

  }
  handleChangeInput(e) {
    this.setState({
      taskName: e.target.value,
    });
  }
  handleAddTask(e) {
    if (this.state.taskName.trim()) {
      let newTask = {
        id: new Date().getTime(),
        taskName: this.state.taskName,
        isCompleted: false,
      };
      this.setState((prevState) => {
        return {
          ...prevState,
          listTasks: [newTask, ...prevState.listTasks],
          taskName: "",
        };
      });
    } else {
      return;
    }
  }
  handleDeleteTask(id) {
    console.log(id);
    this.setState((prevState) => {
      return {
        ...prevState,
        listTasks: [
          ...prevState.listTasks.filter((item) => item.id !== parseInt(id)),
        ],
      };
    });
  }
  handleCompletedTask(id) {
    let taskId = this.state.listTasks.findIndex(
      (item) => item.id === parseInt(id)
    );
    this.setState((prevState) => {
      return {
        ...prevState,
        ...(prevState.listTasks[taskId].isCompleted = true),
        listTasks: [...prevState.listTasks],
      };
    });
  }
  getTaskInCurrentPage() {
    const startIndex = this.state.currentPage * limitTasks - limitTasks
    return [...this.state.listTasks.slice(startIndex, startIndex + limitTasks)]
  }

  handleSetCurrentPage(page) {
    this.setState({
      currentPage: page
    })
  }

  render() {
    return (
      <div className="App">
        <HeaderTitle title="TO DO LIST APPLICATION" />
        <div className="addTask">
          <Input
            placeholder="Add new task"
            handleChangeInput={(e) => this.handleChangeInput(e)}
            value={this.state.taskName}
          />
          <Button plus handleAddTask={(e) => this.handleAddTask(e)} />
        </div>
        <Divider fullWidth />
        <List
          listTasks={this.getTaskInCurrentPage()}
          handleDeleteTask={this.handleDeleteTask}
          handleCompletedTask={this.handleCompletedTask}
        />
        <Divider fullWidth />
        <Pagination
          currentPage={this.state.currentPage}
          taskLists={this.state.listTasks}
          limit={limitTasks}
          handleSetCurrentPage={this.handleSetCurrentPage}
        />
      </div>
    );
  }
}

export default App;
