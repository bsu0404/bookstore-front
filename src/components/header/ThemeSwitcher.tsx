import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

const ThemeSwitcher = () => {
  // context에서 가져옴
  const { themeName, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>{themeName}</button>
    </div>
  );
};

export default ThemeSwitcher;
