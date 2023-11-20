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
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
