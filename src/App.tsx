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

function App() {
  // Infer the type as "boolean"
  // const [enabled, setEnabled] = useState(false);
  // Explicitly set the type to "boolean"
  const [enabled, setEnabled] = useState<boolean>(false);
  type RequestState =
    | { status: "idle" }
    | { status: "loading" }
    | { status: "success"; data: any }
    | { status: "error"; error: Error };
  //you can group related state as an object and describe the different possibilities via object types:
  const [requestState, setRequestState] = useState<RequestState>({
    status: "idle",
  });

  return (
    <div className="App">
      <h1> Welcom to my app</h1>
      <article>
        <h1>My First Component</h1>
        <ol>
          <li>Components: UI Building Blocks</li>
          <li>Defining a Component</li>
          <li>Using a Component</li>
        </ol>
      </article>
      <MyButton title="I'm button" />
      <YourButton title="hello world" disable={true} />
    </div>
  );
}

export default App;
