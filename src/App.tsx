import { useReducer } from "react";
import "./App.css";

interface State {
  count: number;
}

type CounterAction =
  | { type: "reset" }
  | { type: "setCount"; value: State["count"] };

const initialState: State = { count: 0 };

function stateReducer(state: State, action: CounterAction): State {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setCount":
      return { ...state, count: action.value };
    default:
      throw new Error("Unkown action");
  }
}

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
  const reset = () => dispatch({ type: "reset" });
  return (
    <div className="App">
      <h1> Welcom to my Counter</h1>
      <p>Count: {state.count}</p>
      <button onClick={addFive}>add 5</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
