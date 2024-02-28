import { getFormDetails } from "@/services/api/form";
import { useState, useEffect, ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

interface ScheduleInfoProps {
  category: string;
  dropdown: React.ReactNode;
}

function ScheduleInfo({ category, dropdown }: ScheduleInfoProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [semester, setSemester] = useState(searchParams.get("sem") || "");
  const [academicYear, setAcademicYear] = useState<string | number>(
    searchParams.get("year") || "",
  );

  useEffect(() => {
    getFormDetails().then((response) => {
      setAcademicYear(response.academic_year);
      setSemester(response.semester);
    });
  }, []);

  useEffect(() => {
    searchParams.set("sem", semester);
    searchParams.set("year", academicYear.toString());
    setSearchParams(searchParams);
  }, [semester, academicYear]);

  const handleSemChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSemester(e.target.value);
  };

  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAcademicYear(e.target.value);
  };

  return (
    <tr className="h-10">
      <td colSpan={1}>{category}: </td>
      <td colSpan={9}>{dropdown}</td>
      <td>Semester:</td>
      <td colSpan={2} className="text-center uppercase">
        <select
          className="w-full rounded p-2 text-center"
          value={semester}
          onChange={handleSemChange}
        >
          <option value="FIRST">FIRST</option>
          <option value="SECOND">SECOND</option>
          <option value="SUMMER">SUMMER</option>
        </select>
      </td>
      <td colSpan={2} className="text-center">
        Academic Year:
      </td>

      <td colSpan={3} className="text-center">
        <select
          className="w-full rounded p-2 text-center"
          value={academicYear}
          onChange={handleYearChange}
        >
          <option>2024</option>
        </select>
      </td>
    </tr>
  );
}

export default ScheduleInfo;
