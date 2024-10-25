import ReactDom from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import React from "react";

ReactDom.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
