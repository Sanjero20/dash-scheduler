import { Button } from "@/components/ui/button";
import { uploadSchedules } from "@/services/api/faculty";
import { useSchedule } from "@/stores/schedule";

function ButtonSave() {
  const { getSchedules } = useSchedule();

  const handleSave = async () => {
    const schedules = getSchedules();
    const response = await uploadSchedules(schedules);
    console.log(response);
  };

  return <Button onClick={handleSave}>Save</Button>;
}

export default ButtonSave;
