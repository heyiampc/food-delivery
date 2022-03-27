import React from "react";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "green" }}
      onClick={onClick}
    ></div>
  );
};

export default PrevArrow;
