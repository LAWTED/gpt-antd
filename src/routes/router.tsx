import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import Root from "./root";
import Demo1 from "../demo/WithoutGPTDemo";
import Demo2 from "../demo/GPTDemo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/demo/1",
        element: <Demo1 />,
      },
      {
        path: "/demo/2",
        element: <Demo2 />,
      },
    ],
  },
]);
