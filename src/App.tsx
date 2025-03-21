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
  return (
    <div className="App">
      <h1> Welcom to my app</h1>
    </div>
  );
}

export default App;
