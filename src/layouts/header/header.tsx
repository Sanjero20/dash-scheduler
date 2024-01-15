import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const ROUTES = [
  { path: "/", placeholder: "Faculty view" },
  { path: "/rooms", placeholder: "Room view" },
  { path: "/another", placeholder: "Another view" },
];

function Header() {
  return (
    <header className="container flex items-center justify-between bg-black/80 py-2">
      <nav className="gap-2 text-white">
        {ROUTES.map((route) => (
          <NavLink
            to={route.path}
            className={({ isActive }) =>
              `${isActive ? "bg-white text-black" : undefined} w-12 rounded px-4 py-2`
            }
          >
            {route.placeholder}
          </NavLink>
        ))}
      </nav>

      <Button variant={"destructive"}>Logout</Button>
    </header>
  );
}

export default Header;
