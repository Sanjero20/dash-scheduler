import { Outlet } from "react-router-dom";
import Header from "./header/header";

function UserLayout() {
  return (
    <div className="flex h-screen min-h-screen flex-col gap-2">
      <Header />

      <main className="container flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default UserLayout;
