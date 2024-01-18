import { Button } from "@/components/ui/button";

function ButtonPrint() {
  return (
    <Button variant={"secondary"} onClick={() => print()}>
      Print
    </Button>
  );
}

export default ButtonPrint;
