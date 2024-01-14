import { createBrowserRouter } from "react-router-dom";
import { userRoutes } from "./user.routes";

import LoginPage from "@/pages/login";
import UserLayout from "@/layouts/user-layout";

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/admin",
    element: <>Admin page</>,
    // children: []
  },
  {
    path: "/",
    element: <UserLayout />,
    children: userRoutes,
  },
]);
