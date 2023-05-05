import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import About from "./components/pages/About";
import NavigationBar from "./components/NavIcons/Navigationbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationBar></NavigationBar>,
    children: [
      {
        path: "/",
        element: (
          <>
            <MainPage />
          </>
        ),
      },
      { path: "/about", element: <About /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
