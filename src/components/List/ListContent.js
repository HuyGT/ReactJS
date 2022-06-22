import React from "react";

export default function ListContent(props) {
  const { content, status } = props;
  return !status ? (
    <p className="max-line">{content}</p>
  ) : (
    <p
      className="max-line"
      style={{
        color: "rgb(8, 245, 87)",
        fontWeight: 600,
      }}
    >
      {content}
    </p>
  );
}
