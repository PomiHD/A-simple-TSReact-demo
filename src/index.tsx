import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App/>);
// not use jsx
// ReactDOM.createRoot(entryPoint).render(React.createElement(App));