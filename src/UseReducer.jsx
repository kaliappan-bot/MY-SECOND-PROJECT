import React, { useReducer } from "react";
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};
function reducerFn(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducerFn, { count: 0 });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        gap: "10px",
      }}
    >
      <h1>28/07/2025</h1>
      <h1>Use Reducer</h1>
      <h2>Count: {state.count}</h2>
      <div>
        <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
        <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
      </div>
    </div>
  );
};

export default UseReducer;
