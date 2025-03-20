import "./App.css";

interface State {
  count: number;
}

type CounterAction =
  | { type: "reset" }
  | { type: "setCount"; value: State["count"] };

const initialState: State = { count: 0 };

function App() {
  return (
    <div className="App">
      <h1> Welcom to my app</h1>
    </div>
  );
}

export default App;
