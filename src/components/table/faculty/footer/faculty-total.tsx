/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import InputFields from "./input-fields";
import InputTeachingHours from "./input-teaching-hours";
import { initialValues, useFacultyStore } from "@/stores/faculty";
import { getFacultyFooter } from "@/services/api/faculty";
import { useSearchParams } from "react-router-dom";

function FacultyTotal() {
  const [officialTime, setOfficialTime] = useState(initialValues);
  const [hours, setHours] = useState(initialValues);
  const [overtimeWithin, setOvertimeWithin] = useState(initialValues);
  const [overtimeOutside, setOvertimeOutside] = useState(initialValues);

  const [searchParams] = useSearchParams();

  const { setTotal } = useFacultyStore();

  useEffect(() => {
    const fetchData = async () => {
      const id = searchParams.get("userId");
      if (!id) return;
      const { total } = await getFacultyFooter(id);

      const { officialTime, teachingHours, overtimeOutside, overtimeWithin } =
        total;

      setOfficialTime(officialTime);
      setHours(teachingHours);
      setOvertimeWithin(overtimeWithin);
      setOvertimeOutside(overtimeOutside);
    };

    fetchData();
  }, [searchParams]);

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
