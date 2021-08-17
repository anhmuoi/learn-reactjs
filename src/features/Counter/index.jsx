import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./counterSlice.js";

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const handleIncreaseClick = () => {
    const action = increase();
    dispatch(action);
  };
  const handleDecreaseClick = () => {
    const action = decrease();
    dispatch(action);
  };

  return (
    <div>
      <div>counter : {counter}</div>
      <button onClick={handleIncreaseClick}>Increase</button>
      <button onClick={handleDecreaseClick}>Decrease</button>
    </div>
  );
}

export default CounterFeature;
