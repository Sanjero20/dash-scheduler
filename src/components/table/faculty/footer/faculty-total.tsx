import { useState } from "react";

import { DAYS } from "@/constants/initial";
import InputFields from "./input-fields";
import InputTeachingHours from "./input-teaching-hours";

const initialValues = DAYS.map(() => "");

function FacultyTotal() {
  const [officialTimes, setOfficialTimes] = useState(initialValues);
  const [hours, setHours] = useState(initialValues);
  const [overtimeWithin, setOvertimeWithin] = useState(initialValues);
  const [overtimeOutside, setOvertimeOutside] = useState(initialValues);

  return (
    <>
      <InputFields
        title="Official Time"
        list={officialTimes}
        handler={setOfficialTimes}
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
