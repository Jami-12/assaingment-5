import { createBrowserRouter } from "react-router-dom";
import Home from "../components/homes/Home";
import Task from "../components/homes/Task";
import Completed from "../components/homes/Completed";
import About from "../components/About";
import Forms from "../components/forms/Forms";
import App from "../App";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/task",
        element: <Task />,
      },
      {
        path: "/completed",
        element: <Completed />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/form",
        element: <Forms />,
      },
    ],
  },
]);
