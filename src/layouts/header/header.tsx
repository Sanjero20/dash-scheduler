import { NavLink } from "react-router-dom";
import ButtonLogout from "./button-logout";
import ButtonSave from "./button-save";
import ButtonPrint from "./button-print";

const ROUTES = [
  { path: "/", placeholder: "Faculty Schedule" },
  { path: "/rooms", placeholder: "Room Utilization" },
  { path: "/schedules", placeholder: "Class Schedule" },
];

function Header() {
  return (
    <header className="bg-black/80">
      <div className="container flex items-center justify-between py-2">
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

        <div className="flex gap-8">
          <div className="flex gap-2">
            <ButtonSave />
            <ButtonPrint />
          </div>

          <ButtonLogout />
        </div>
      </div>
    </header>
  );
}

export default Header;
