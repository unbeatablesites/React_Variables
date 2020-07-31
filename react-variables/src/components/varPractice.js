import React from "react";

const name = "Frank Uzoka";
const num1 = 1;
const num2 = 2;

const VarPractice = () => (
  <div>
    <div>Hi, my name is {name}. But you can call me the React JSX Boss. </div>

    <hr />

    <div>I can do math with React. 1 + 2 ={num1 + num2}</div>

    <hr />

    <div>
      I can generate random numbers. {Math.floor(Math.random() * 10) + 1} -
      {Math.floor(Math.random() * 10) + 1} -{" "}
      {Math.floor(Math.random() * 10) + 1}
    </div>

    <h2>I can even reverse my name: {name.split("").reverse()}</h2>
  </div>
);

export default VarPractice;
