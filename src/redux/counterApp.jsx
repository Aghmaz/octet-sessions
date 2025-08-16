import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlicer";
import { useNavigate } from "react-router-dom";

const CounterApp = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/user");
  };
  return (
    <div>
      <button onClick={handleNavigate}>user screen</button>
      <h2>count : {count}</h2>
      <br />
      <br />
      <button onClick={() => dispatch(increment())}>+</button>
      <br />
      <br />
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <br />
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default CounterApp;
