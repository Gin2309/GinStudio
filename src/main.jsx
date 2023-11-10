import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import { Checkout, Detail, Product, Register } from "./pages";
import { Cart, PageContents } from "./components";
import Root from "./Root";
import Test from "./components/Test";
// import { Outlet } from "react-router-dom";

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
        path: "product",
        element: <Product />,
      },
      {
        path: "product/detail",
        element: <Detail />,
      },
      {
        path: "/",
        element: <PageContents />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/test",
        element: <Test />,
      },
    ],
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
