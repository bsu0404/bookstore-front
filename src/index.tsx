import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "sanitize.css";
import { light } from "./style/theme";
import { ThemeContext, state } from "./context/themeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <ThemeContext.Provider value={state}> */}
    <App />
    {/* </ThemeContext.Provider> */}
  </React.StrictMode>
);

// ThemeContext 파일에서 context 설정
// 하위에서 모두 사용 가능
