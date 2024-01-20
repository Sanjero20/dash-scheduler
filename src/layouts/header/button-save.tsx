import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { uploadSchedules } from "@/services/api/faculty";
import { useScheduleStore } from "@/stores/schedule";
import { CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

function ButtonSave() {
  const { getSchedules, setSchedules } = useScheduleStore();

  const [isSaving, setIsSaving] = useState(false);

  const { toast } = useToast();

  const handleSave = async () => {
    setIsSaving(true);

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

    setIsSaving(false);
  };

  return (
    <Button
      variant={"secondary"}
      onClick={handleSave}
      disabled={isSaving}
      className="w-24"
    >
      {isSaving ? "Saving..." : "Save"}
    </Button>
  );
}

export default ButtonSave;
