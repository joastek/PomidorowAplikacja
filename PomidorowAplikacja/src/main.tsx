import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";

import { BrowserRouter } from "react-router-dom";
// import { BackgroundColorProvider } from "./components/models/Background.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <BackgroundColorProvider> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>{" "}
    {/* </BackgroundColorProvider> */}
  </React.StrictMode>
);
