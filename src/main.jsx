import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import { Checkout, Detail, Product, Register } from "./pages";
import { Cart, PageContents } from "./components";
import Root from "./Root";
import { productPage } from "./constants";

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
