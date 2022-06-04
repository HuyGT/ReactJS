import React, { Component } from "react";
import Button from "../Button";
import Divider from "../Divider";
import ListContent from "./ListContent";
import "./style.css";

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { item } = this.props;

    return (
      <>
        <div className="list-item">
          <div>
            <ListContent content={item} />
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button completed />
            <Button deleted />
          </div>
        </div>
        <Divider />
      </>
    );
  }
}
