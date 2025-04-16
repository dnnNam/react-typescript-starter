import { createContext } from "react";
import { theme } from "./theme";

type ThemeContextProvicderProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProvicderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
