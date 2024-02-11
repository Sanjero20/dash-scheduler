import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { CheckCircle, XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import { useFacultyStore } from "@/stores/faculty";
import { useScheduleStore } from "@/stores/schedule";
import { useScheduleState } from "@/stores/scheduleState";

import { updateClassSectionSchedule } from "@/services/api/schedule";
import {
  saveFacultyFooter,
  saveScheduleState,
  uploadSchedules,
} from "@/services/api/faculty";
import { useEditState } from "@/stores/editState";

function ButtonSave() {
  const [isSaving, setIsSaving] = useState(false);

  const { schedules, setSchedules } = useScheduleStore();
  const { scheduleState } = useScheduleState();
  const { total, summary } = useFacultyStore();
  const { setEditState } = useEditState();

  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();

  const { toast } = useToast();

  const handleFacultySave = async () => {
    setIsSaving(true);

    const id = searchParams.get("userId");

    if (!id) return;

    const response = await uploadSchedules(schedules);
    await saveFacultyFooter(id, total, summary);
    await saveScheduleState(scheduleState);

    if (response.conflicts) {
      toast({
        variant: "destructive",
        title: "Something went wrong.",
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
    setEditState(false);
  };

  const handleSectionScheduleSave = async () => {
    setIsSaving(true);
    try {
      await updateClassSectionSchedule({ rows: schedules });
      toast({
        variant: "success",
        description: "The schedule has been saved successfully.",
        action: <CheckCircle />,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong.",
        description: "There are conflicting schedules.",
        action: <XCircle />,
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Button
      variant={"secondary"}
      onClick={pathname == "/" ? handleFacultySave : handleSectionScheduleSave}
      disabled={isSaving}
      className="w-24"
    >
      {isSaving ? "Saving..." : "Save"}
    </Button>
  );
}

export default ButtonSave;
