import { NavLink, useSearchParams } from "react-router-dom";
import ButtonLogout from "../../components/button-logout";
import ButtonSave from "./button-save";
import ButtonPrint from "./button-print";
import NavLinkTrigger from "@/components/navlink-trigger";
import { useEffect, useState } from "react";
import { useEditState } from "@/stores/editState";
import { useScheduleState } from "@/stores/scheduleState";

const ROUTES = [
  { path: "/", placeholder: "Faculty Schedule" },
  { path: "/rooms", placeholder: "Room Utilization" },
  { path: "/schedules", placeholder: "Class Schedule" },
];

function Header() {
  const { editState } = useEditState();

  const [open, setOpen] = useState(false);
  const [id, setPageID] = useState<string | null>();
  const [searchParams] = useSearchParams();

  return (
    <>
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
                onClick={() => {
                  setPageID(searchParams.get("userId"));
                  setOpen(editState);
                }}
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
      <NavLinkTrigger id={id} open={open} setOpen={setOpen} />
    </>
  );
}

export default Header;
