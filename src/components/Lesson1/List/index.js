import React, { Component } from "react";
import ListItem from "./ListItem";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const { listTask } = this.props;
    return (
      <>
        <div className="list-wrapper">
          {
            listTask.map((item,index) =>{
              return <ListItem key={index} item={item.content}/>
            })
          }
          
        </div>
      </>
    );
  }
}
