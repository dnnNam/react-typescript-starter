import React from "react";
import { Greet } from "../Greet";

//Extracting a Components Prop Types là có thể lấy type của component khác về
//dùng thông qua  thư viện React

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return <div>{props.isLoggedIn}</div>;
};
