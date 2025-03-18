import { useState } from "react";
import "./App.css";

function MyButton({ title }: { title: string }) {
  return <button>{title}</button>;
}

interface MyButtonProps {
  title: string;
  disable: boolean;
}

function YourButton({ title, disable }: MyButtonProps) {
  return <button disabled={disable}>{title}</button>;
}

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
      {/* <h1> Welcom to my app</h1>
      <article>
        <h1>My First Component</h1>
        <ol>
          <li>Components: UI Building Blocks</li>
          <li>Defining a Component</li>
          <li>Using a Component</li>
        </ol>
      </article>
      <MyButton title="I'm button" />
      <YourButton title="hello world" disable={true} /> */}
    </div>
  );
}

export default App;
