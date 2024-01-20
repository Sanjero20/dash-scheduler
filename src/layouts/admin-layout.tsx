import { Outlet } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import ButtonLogout from "../components/button-logout";

function AdminLayout() {
  const permission = useAuth();

  if (permission !== "admin") return;

  return (
    <div>
      <ButtonLogout />
      <Outlet />
    </div>
  );
}

export default AdminLayout;
