import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import styled from "styled-components";

const ThemeSwitcher = () => {
  // context에서 가져옴
  const { themeName, toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeButton className="theme">
      <button onClick={toggleTheme}>{themeName}</button>
    </ThemeButton>
  );
};

const ThemeButton = styled.div`
  display: flex;
  justify-content: end;
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: ${({ theme }) => theme.color.third};
    color: ${({ theme }) => (theme.name === "dark" ? "black" : "white")};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: ${({ theme }) => theme.color.primary};
    }

    &:active {
      transform: translateY(0);
    }
  }
`;
export default ThemeSwitcher;
