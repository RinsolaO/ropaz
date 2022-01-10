import React from "react";
import { NavLink } from "react-router-dom";

const Btn = (props) => {
  return (
    <a href={props.linkTo}>
      <button className={`btn ${props.orangeBg} ${props.whiteBg}`}>
        {" "}
        {props.title}
      </button>
    </a>
  );
};

export default Btn;
