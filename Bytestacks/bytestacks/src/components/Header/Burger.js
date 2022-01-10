import { useState } from "react";

const Burger = (props) => {
  return (
    <div onClick={props.onOpen} className={`burger ${props.activeClassName}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Burger;
