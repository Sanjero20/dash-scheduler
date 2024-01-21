import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ButtonLogout from "../components/button-logout";
import useAuth from "@/hooks/useAuth";

function AdminLayout() {
  const permission = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (permission === "user") {
      navigate("/");
    }
  });

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
