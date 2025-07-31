import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import CountactUs from "./Components/CountactUs";
import Error from "./Components/Error";
import Body from "./Components/Body";
import RestaurantMenu from "./Components/RestaurantMenu";

const Groceries = lazy(() => import("./Components/Groceries"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <CountactUs />,
      },
      {
        path: "/groceries",
        element: (
          <Suspense fallback={<h1>Groceries page Loading.....</h1>}>
            <Groceries />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={appRouter}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
