import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeButton = () => {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h3>{theme}</h3>
      <button onClick={handleToggleTheme}>Toggle Button</button>
    </>
  );
};

export default ThemeButton;
