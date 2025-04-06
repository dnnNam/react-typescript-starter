type GreetProps = {
  name: string;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>HELLO WORLD {props.name}</h2>
    </div>
  );
};
