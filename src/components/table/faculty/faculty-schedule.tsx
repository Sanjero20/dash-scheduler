/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SCHEDULES } from "@/constants/initial";

import ColumnName from "../rows/schedule-list/names";
import InputCol from "./input/input-col";
import InputSection from "./input/input-section";

import { getFormattedShedule } from "@/services/api/faculty";
import { useScheduleStore } from "@/stores/schedule";
import useScheduleList from "@/hooks/useScheduleList";

function FacultySchedule() {
  const [state, dispatch, handleInputChange] = useScheduleList();
  const { getSchedules, setSchedules } = useScheduleStore();
  const [searchParams] = useSearchParams();

  // fetch data base on userId
  useEffect(() => {
    const userId = searchParams.get("userId");
    if (!userId) {
      setSchedules([]);
      return;
    }
    const fetchData = async () => {
      const data = await getFormattedShedule(parseInt(userId));
      dispatch({ type: "SET_ALL", value: data });
    };

    fetchData();
  }, [searchParams]);

  // copy state globally
  useEffect(() => {
    setSchedules(state);
  }, [state]);

  useEffect(() => {
    const schedules = getSchedules();
    dispatch({ type: "SET_ALL", value: schedules });
  }, [setSchedules]);

  return (
    <>
      {SCHEDULES.map((schedule, index) => (
        <Fragment key={index}>
          {/* template */}
          <tr className="h-8 text-center">
            <td rowSpan={2}>{schedule}</td>

            <InputCol
              stateIndex={index}
              state={state}
              handleInputChange={handleInputChange}
            />

            {index < 8 && (
              <>
                <td></td>
                <td></td>
                <td></td>
              </>
            )}
          </tr>

          {/* sections */}
          <tr className="h-8 w-fit text-center">
            <InputSection
              stateIndex={index}
              state={state}
              handleInputChange={handleInputChange}
            />

            {index < 7 && (
              <>
                <td></td>
                <td></td>
                <td></td>
              </>
            )}

            {/* Columns for the names in the right side of the table */}
            {index == 7 && (
              <ColumnName rowSpan={4} name="" title="Faculty Assigned" />
            )}

            {index == 9 && (
              <ColumnName rowSpan={6} name="" title="Dean CEAFA" />
            )}

            {index == 12 && (
              <ColumnName
                rowSpan={9}
                name=""
                title="Executive Director, Main II"
              />
            )}
          </tr>
        </Fragment>
      ))}
    </>
  );
}

export default FacultySchedule;
