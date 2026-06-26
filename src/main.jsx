import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SelectTemplate from "./pages/SelectTemplate";
import CreatTemplate from "./pages/CreatTemplate";
import Footer from "./component/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/select-template",
    Component: SelectTemplate,
  },
  {
    path: "/create-template",
    Component: CreatTemplate,
  },
  {
    path: "/footer",
    Component: Footer,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
