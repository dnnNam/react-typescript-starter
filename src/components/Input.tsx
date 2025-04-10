import { log } from "console";

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <input type="text" value={props.value} onChange={props.handleChange} />
  );
};

// component này cần 2 props giá trị đầu vào và trình xử lý onchange
