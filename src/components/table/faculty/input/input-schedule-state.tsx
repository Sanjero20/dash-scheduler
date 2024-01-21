import { IScheduleRight } from "@/types/api";
import { useScheduleState } from "@/stores/scheduleState";

function InputScheduleState({ course, initials, section }: IScheduleRight) {
  const { scheduleState, setStateSchedule } = useScheduleState();

  // checks for duplication
  const handleStore = (params: IScheduleRight) => {
    const { course, initials, section } = params;
    if (course === "" || initials === "" || section === "") return;
    const countsched = scheduleState.filter(
      (sched) =>
        sched.course === course &&
        sched.initials === initials &&
        sched.section === section,
    );

    // append the new sched
    if (countsched.length === 0)
      return setStateSchedule([...scheduleState, params]);

    // replace the old sched
    const newSched = scheduleState.filter(
      (sched) => !(sched.course === course && sched.section === section),
    );

    setStateSchedule([...newSched, params]);
  };

  return (
    <input
      onChange={(e) =>
        handleStore({ course, initials, section, status: e.target.value })
      }
    />
  );
}

export default InputScheduleState;
