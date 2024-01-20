import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { logoutAccount } from "@/services/auth";
import { removeCookie } from "@/lib/cookie";

function ButtonLogout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutAccount();
    removeCookie("token");
    removeCookie("permission");
    navigate("/login", { replace: true });
  };

  return (
    <Button
      variant={"destructive"}
      className="w-24 rounded-xl"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
}

export default ButtonLogout;
