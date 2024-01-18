import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { uploadSchedules } from "@/services/api/faculty";
import { useScheduleStore } from "@/stores/schedule";
import { CheckCircle, XCircle } from "lucide-react";

function ButtonSave() {
  const { getSchedules, setSchedules } = useScheduleStore();

  const { toast } = useToast();

  const handleSave = async () => {
    const schedules = getSchedules();
    const response = await uploadSchedules(schedules);

    if (response.conflicts) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There are conflicting schedules.",
        action: <XCircle />,
      });

      setSchedules(response.formattedConflict);
    } else {
      toast({
        variant: "success",
        description: "The schedule has been saved successfully.",
        action: <CheckCircle />,
      });
    }

    console.log(response);
  };

  return (
    <Button variant={"secondary"} onClick={handleSave}>
      Save
    </Button>
  );
}

export default ButtonSave;
