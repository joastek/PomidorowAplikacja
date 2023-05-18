import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { BackgroundColorProvider } from "./components/models/Background.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <BackgroundColorProvider>
        {" "}
        <App />
      </BackgroundColorProvider>
    </BrowserRouter>
  </React.StrictMode>
);
