import "./App.css";

import MainPage from "./components/pages/MainPage";
import About from "./components/pages/About";
import NavigationBar from "./components/NavIcons/Navigationbar";
import ErrorPage from "./components/pages/Error";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        {" "}
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" errorElement={<ErrorPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
