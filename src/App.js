import React from "react";
import "./App.css";
import {
  incrementByN,
  decrementByN,
  updateN,
  incrementCounter,
  decrementCounter,
  allowIncrementByN,
} from "./actions";
import { reducer } from "./reducer";
import { CreateStore } from "./store";

function App() {
  const store = CreateStore(reducer);
  const state = store.getState();
  const dispatch = store.dispatch;
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => dispatch(allowIncrementByN())}>
          Allow to increment
        </button>
        {state.incrementers.counter}
        <label>Number to increment by</label>
        <input
          onChange={(event) => dispatch(updateN(Number(event.target.value)))}
        />
        <button onClick={() => dispatch(incrementCounter())}>Increment</button>
        <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
        <button
          disabled={!state.allowers.allowed}
          onClick={() => dispatch(incrementByN())}
        >
          Increment by N
        </button>
        <button
          disabled={!state.allowers.allowed}
          onClick={() => dispatch(decrementByN())}
        >
          Decrement by N
        </button>
      </header>
    </div>
  );
}

export default App;
