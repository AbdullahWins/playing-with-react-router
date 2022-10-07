import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Comonents/Home/Home";
import Shop from "./Comonents/Shop/Shop";
import About from "./Comonents/About/About";
import Posts from "./Comonents/Posts/Posts";
import Main from "./layout/Main";
import MemberDetails from "./Comonents/MemberDetails/MemberDetails";
import PostDetails from "./Comonents/PostDetails/PostDetails";

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
        {
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/posts");
          },
          path: "/posts",
          element: <Posts></Posts>,
        },
        {
          loader: ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/posts/${params.postId}`
            );
          },
          path: "/posts/:postId",
          element: <PostDetails></PostDetails>,
        },
        {
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          path: "/about",
          element: <About></About>,
        },
        {
          loader: async ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.memberId}`
            );
          },
          path: "/member/:memberId",
          element: <MemberDetails></MemberDetails>,
        },
      ],
    },
    {
      path: "*",
      element: (
        <div>
          <h2>404 not found</h2>
        </div>
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
