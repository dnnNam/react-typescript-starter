import { useReducer } from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";

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
      throw new Error("notdefine action");
  }
}

function App() {
  // phai cap nhap lai state cho truong hop co nhieu hon 2 thuoc tinh
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
  const addTen = () => dispatch({ type: "setCount", value: state.count + 10 });
  const reset = () => dispatch({ type: "reset" });

  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  return (
    <div className="App">
      <h1> Welcom to my Counter</h1>
      <p>Count: {state.count}</p>
      <button onClick={addFive}>add 5</button>
      <button onClick={addTen}> add 10</button>
      <button onClick={reset}>Reset</button>
      <Greet name="hehe" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
    </div>
  );
}

export default App;
