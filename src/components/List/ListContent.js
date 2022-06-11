import React, { Component } from "react";

export default class ListContent extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const { content, status } = this.props;
    if (!status) {
      return (
        <p
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "450px",
          }}
        >
          {content}
        </p>
      );
    } else {
      return (
        <p
          style={{
            color: "rgb(8, 245, 87)",
            fontWeight: 600,
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "450px",
          }}
        >
          {content}
        </p>
      );
    }
  }
}
