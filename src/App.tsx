import { useReducer } from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
import { Counter } from "./components/class/Counter";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";

// interface State {
//   count: number;
// }

// type CounterAction =
//   | { type: "reset" }
//   | { type: "setCount"; value: State["count"] };

// const initialState: State = { count: 0 };

// function stateReducer(state: State, action: CounterAction): State {
//   switch (action.type) {
//     case "reset":
//       return initialState;
//     case "setCount":
//       return { ...state, count: action.value };
//     default:
//       throw new Error("notdefine action");
//   }
// }

function App() {
  // // phai cap nhap lai state cho truong hop co nhieu hon 2 thuoc tinh
  // const [state, dispatch] = useReducer(stateReducer, initialState);
  // const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
  // const addTen = () => dispatch({ type: "setCount", value: state.count + 10 });
  // const reset = () => dispatch({ type: "reset" });

  // const personName = {
  //   first: "Bruce",
  //   last: "Wayne",
  // };

  // const nameList = [
  //   {
  //     first: "Bruce",
  //     last: "Wayne",
  //   },
  //   {
  //     first: "Clark",
  //     last: "Kent",
  //   },
  //   {
  //     first: "Princess",
  //     last: "Diana",
  //   },
  // ];
  return (
    <div className="App">
      {/* <h1> Welcom to my Counter</h1>
      <p>Count: {state.count}</p>
      <button onClick={addFive}>add 5</button>
      <button onClick={addTen}> add 10</button>
      <button onClick={reset}>Reset</button>
      <Greet name="hehe" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />

      <Status status="loading" />
      <Heading>Placeholder </Heading>
      <Oscar>
        <Heading>Oscar goes to </Heading>
      </Oscar>

      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />

      <Input value="" handleChange={(event) => console.log(event)} />

      <Container styles={{ border: "1px solid black", padding: "1rem" }} />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* 
      <DomRef />
      <MutableRef /> */}

      {/* <Counter message="the count value is" /> */}

      {/* <Private isLoggedIn={true} component={Profile} /> */}

      {/* <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />

      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      <List
        items={[
          { id: 1, first: "Bruce", last: "Wayce" },
          { id: 2, first: "Clark", last: "Kent" },
          { id: 3, first: "Princess", last: "Diana" },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
