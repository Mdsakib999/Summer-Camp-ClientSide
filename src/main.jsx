import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./routs/Routs";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="w-[80%] mx-auto">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
