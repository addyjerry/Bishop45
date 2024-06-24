import React from "react";
import "./Stacks.css";

const Stacks = () => {
  return (
    <div className="Stacks">
      <div id="frontend">
        <h3>FRONTEND</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>REACT JS</li>
          <li>NEXT JS</li>
        </ul>
      </div>
      <div id="backend">
        <h3>BACKEND</h3>
        <ul>
          <li>DJANGO</li>
          <li>FLASK</li>
          <li>MYSQL</li>
          <li>NODE JS</li>
        </ul>
      </div>
    </div>
  );
};

export default Stacks;
