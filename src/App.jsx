import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Layout from "./pages/Layout";
import "./app.css";

const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
