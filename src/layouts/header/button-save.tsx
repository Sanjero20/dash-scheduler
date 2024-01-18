import { Button } from "@/components/ui/button";
import { uploadSchedules } from "@/services/api/faculty";
import { useScheduleStore } from "@/stores/schedule";

function ButtonSave() {
  const { getSchedules } = useScheduleStore();

  const handleSave = async () => {
    const schedules = getSchedules();
    const response = await uploadSchedules(schedules);
    console.log(response);
  };

  return (
    <Button variant={"secondary"} onClick={handleSave}>
      Save
    </Button>
  );
}

export default ButtonSave;
