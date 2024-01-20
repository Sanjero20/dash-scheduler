import { createBrowserRouter } from "react-router-dom";
import { userRoutes } from "./user.routes";

import AdminLayout from "@/layouts/admin-layout";
import UserLayout from "@/layouts/user-layout";

import AdminHome from "@/pages/admin";
import LoginPage from "@/pages/login";

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminHome />,
      },
    ],
  },
  {
    path: "/",
    element: <UserLayout />,
    children: userRoutes,
  },
]);
