import { Outlet } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import ButtonLogout from "../components/button-logout";

function AdminLayout() {
  const permission = useAuth();

  if (permission !== "admin") return;

  return (
    <div className="flex h-screen min-h-screen flex-col gap-2">
      <header className="bg-black/80 p-2">
        <div className="container flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">DASH SCHEDULER</h1>
          <ButtonLogout />
        </div>
      </header>

      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
