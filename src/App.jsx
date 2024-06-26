import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./page/Layout";
import Elshafaa from "./page/Elshafaa";
import Product from "./page/Product";
import NotFound from "./page/NotFound";
import Payment from "./page/Payment";
import Advice from "./page/Advice";

function App() {
  let routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Elshafaa />,
        },
        {
          path: "product",
          element: <Product />,
        },
        {
          path: "payment",
          element: <Payment />,
        },
        {
          path: "advice",
          element: <Advice />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
