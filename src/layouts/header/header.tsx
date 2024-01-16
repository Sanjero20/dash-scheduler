import { NavLink } from "react-router-dom";
import ButtonLogout from "./button-logout";

const ROUTES = [
  { path: "/", placeholder: "Faculty Schedule" },
  { path: "/rooms", placeholder: "Room Utilization" },
  { path: "/schedules", placeholder: "Class Schedule" },
];

function Header() {
  return (
    <header className="container flex items-center justify-between bg-black/80 py-2">
      <nav className="gap-2 text-white">
        {ROUTES.map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            className={({ isActive }) =>
              `${isActive ? "bg-white text-black" : undefined} w-12 rounded-xl px-6 py-3`
            }
          >
            {route.placeholder}
          </NavLink>
        ))}
      </nav>

      <ButtonLogout />
    </header>
  );
}

export default Header;
