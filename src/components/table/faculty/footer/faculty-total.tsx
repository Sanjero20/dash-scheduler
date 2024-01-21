/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import InputFields from "./input-fields";
import InputTeachingHours from "./input-teaching-hours";
import { initialValues, useFacultyStore } from "@/stores/faculty";

function FacultyTotal() {
  const [officialTime, setOfficialTime] = useState(initialValues);
  const [hours, setHours] = useState(initialValues);
  const [overtimeWithin, setOvertimeWithin] = useState(initialValues);
  const [overtimeOutside, setOvertimeOutside] = useState(initialValues);

  const { setTotal } = useFacultyStore();

  useEffect(() => {
    setTotal({
      officialTime,
      teachingHours: hours,
      overtimeWithin,
      overtimeOutside,
    });
  }, [officialTime, hours, overtimeWithin, overtimeOutside]);

  return (
    <>
      <InputFields
        title="Official Time"
        list={officialTime}
        handler={setOfficialTime}
      />

      <InputTeachingHours list={hours} handler={setHours} />

      <InputFields
        title="Overtime Within"
        list={overtimeWithin}
        handler={setOvertimeWithin}
      />

      <InputFields
        title="Overtime Outside"
        list={overtimeOutside}
        handler={setOvertimeOutside}
      />
    </>
  );
}

export default FacultyTotal;
