import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { saveFacultyFooter, uploadSchedules } from "@/services/api/faculty";
import { useFacultyStore } from "@/stores/faculty";
import { useScheduleStore } from "@/stores/schedule";
import { CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function ButtonSave() {
  const [isSaving, setIsSaving] = useState(false);

  const { schedules, setSchedules } = useScheduleStore();
  const { total, summary } = useFacultyStore();
  const [searchParams] = useSearchParams();

  const { toast } = useToast();

  const handleSave = async () => {
    setIsSaving(true);

    const id = searchParams.get("userId");

    if (!id) return;

    const response = await uploadSchedules(schedules);
    await saveFacultyFooter(id, total, summary);

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
