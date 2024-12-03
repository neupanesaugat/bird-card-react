import React from "react";

const Bird = (props) => {
  return (
    <div
      style={{
        width: "400px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        marginTop: "2rem",
      }}
    >
      <img src={props.image} style={{ height: 400, width: "100%" }} />
      <h1
        style={{
          fontFamily: "fantasy",
          margin: "2rem",
        }}
      >
        {props.name}
      </h1>
    </div>
  );
};

export default Bird;
