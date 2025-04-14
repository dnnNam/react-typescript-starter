import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  // phải định nghĩa object nếu không khi setUser typeScript sẽ báo lỗi
  const handleLogin = () => {
    setUser({
      name: "hehe",
      email: "hehe@gmail.com",
    });
  };
  // const handleLogout = () => {
  //   setUser(null);
  // };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div>User name is{user.name}</div>
      <div>User email is{user.email} </div>
    </div>
  );
};
