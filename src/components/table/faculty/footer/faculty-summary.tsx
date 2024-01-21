import { useState } from "react";

import { DAYS } from "@/constants/initial";
import InputFields from "./input-fields";

const initialValues = DAYS.map(() => "");

function FacultySummary() {
  const [officialTimes, setOfficialTimes] = useState(initialValues);
  const [hours, setHours] = useState(["", "", "", "", ""]);
  const [overtimeWithin, setOvertimeWithin] = useState(initialValues);
  const [overtimeOutside, setOvertimeOutside] = useState(initialValues);

  console.clear();
  // console.table(officialTimes);
  console.table(hours);
  // console.table(overtimeWithin);
  // console.table(overtimeOutside);

  return (
    <>
      <InputFields
        title="Official Time"
        list={officialTimes}
        handler={setOfficialTimes}
      />

      <InputFields
        title="No. of Teaching Hours"
        list={hours}
        handler={setHours}
      >
        <td colSpan={2} className="text-end font-bold">
          TOTAL
        </td>
        <td colSpan={2}>{/*  */}</td>
      </InputFields>

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

export default FacultySummary;
