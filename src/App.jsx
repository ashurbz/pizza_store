import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Menu, { loader as menuLoader } from "./pages/Menu";
import Cart from "./pages/Cart";
import Layout from "./pages/Layout";
import "./app.css";
import ErrorComponent from "./components/ErrorComponent";
import CreateOrder from "./components/CreateOrder";
import Order, { loader as orderLoader } from "./components/Order";

const routes = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
