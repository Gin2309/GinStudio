import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import { Checkout, Detail, Product, Register } from "./pages";
import { Cart, PageContents } from "./components";
import Root from "./Root";
import { productPage } from "./constants";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Root>
        <Outlet />
      </Root>
    ),
    children: [
      {
        path: "/",
        element: <PageContents productPage={productPage} />,
      },
      {
        path: "product",
        element: <Product productPage={productPage} />,
      },
      {
        path: "product/:id",
        element: <Detail productPage={productPage} />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
