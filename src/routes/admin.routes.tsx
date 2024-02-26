import AdminHome from "@/pages/admin";

export const adminRoutes = [
  { index: true, element: <AdminHome /> },
  { path: "form-details", element: <>form page</> },
  { path: "accounts", element: <>Accounts</> },
  { path: "faculties", element: <>Faculties</> },
];
