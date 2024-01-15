import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

function ButtonLogout() {
  const navigate = useNavigate();

  return (
    <Button variant={"destructive"} onClick={() => navigate("/login")}>
      Logout
    </Button>
  );
}

export default ButtonLogout;
