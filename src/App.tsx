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
  return (
    <div className="App">
      <h1> Welcom to my app</h1>
      <MyButton title="I'm button" />
      <YourButton title="hello world" disable={true} />
    </div>
  );
}

export default App;
