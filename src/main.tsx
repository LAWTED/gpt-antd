import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

import "./index.css";
import { GPTContextProvider } from "./components/GPTContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GPTContextProvider>
      <RouterProvider router={router} />
    </GPTContextProvider>
  </React.StrictMode>
);
