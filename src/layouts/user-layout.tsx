import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <div className="flex h-screen min-h-screen flex-col">
      {/* Insert Header here */}

      <main className="container flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default UserLayout;
