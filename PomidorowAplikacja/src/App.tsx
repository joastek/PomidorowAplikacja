import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import About from "./components/pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <MainPage />
      </>
    ),
  },
  { path: "/about", element: <About /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
