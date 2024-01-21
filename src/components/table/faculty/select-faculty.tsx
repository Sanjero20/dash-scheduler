import { ChangeEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getFaculties } from "@/services/api/faculty";
import { IFaculty } from "@/types/api";

function SelectFaculty() {
  const [faculties, setFaculties] = useState<IFaculty[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedValue, setSelectedValue] = useState(
    searchParams.get("userId") || "",
  );

  // fetch faculty list
  useEffect(() => {
    const fetchData = async () => {
      const faculties = await getFaculties();
      setFaculties(faculties);
    };

    fetchData();
  }, []);

  // Update query params on select
  useEffect(() => {
    const params = searchParams.get("userId");

    if (params == "") {
      searchParams.delete("userId");
      setSearchParams(searchParams);
    }
  }, [searchParams]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
    setSearchParams({ userId: e.target.value });
  };

  return (
    <select
      value={selectedValue}
      onChange={handleChange}
      className="rounded p-1"
    >
      <option value={""} disabled>
        Select Faculty
      </option>

      {faculties &&
        faculties.map((faculty) => (
          <option key={faculty.id} value={faculty.id}>
            {faculty.name}
          </option>
        ))}
    </select>
  );
}

export default SelectFaculty;
