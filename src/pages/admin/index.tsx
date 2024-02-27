import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ScrollText, User, Users } from "lucide-react";

const adminRoutes = [
  { path: "form-details", icon: <ScrollText /> },
  { path: "accounts", icon: <User /> },
  { path: "faculties", icon: <Users /> },
];

function AdminHome() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-8 gap-4">
      {adminRoutes.map((route) => (
        <Card
          key={route.path}
          className="flex aspect-square  cursor-pointer select-none flex-col items-center justify-center gap-2"
          onClick={() => navigate(route.path)}
        >
          {route.icon}
          <p className="uppercase">{route.path}</p>
        </Card>
      ))}
    </div>
  );
}

export default AdminHome;
