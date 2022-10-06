import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Comonents/Home/Home";
import Shop from "./Comonents/Shop/Shop";
import About from "./Comonents/About/About";
import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/shop",
          element: <Shop></Shop>,
        },
        { loader: async () => {
          return fetch('https://jsonplaceholder.typicode.com/users')
        },
          path: "/about",
          element: <About></About>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
