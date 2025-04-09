type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `HELLO WORLD ${props.name}! You have ${props.messageCount}`
          : "Welcome guest"}
      </h2>
    </div>
  );
};
