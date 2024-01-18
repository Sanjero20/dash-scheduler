import { SCHEDULES } from "@/constants/initial";
import useScheduleList from "@/hooks/useScheduleList";
import { Fragment, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ColumnName from "../rows/schedule-list/names";
import InputCol from "./input/input-col";
import InputFaculty from "./input/input-faculty";
import { getRoomDataByCode } from "@/services/api/room";

function RoomSchedule() {
  const [state, dispatch, handleInputChange] = useScheduleList();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const id = searchParams.get("id");
    if (!id) {
      return;
    }

    const fetchData = async () => {
      const roomDetails = await getRoomDataByCode(id);
      dispatch({ type: "SET_ALL", value: roomDetails });
    };

    fetchData();
  }, [searchParams]);

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

            {index < 4 && (
              <>
                <td></td>
                <td></td>
                <td></td>
              </>
            )}

            {/* Columns for the names in the right side of the table */}
            {index == 4 && (
              <ColumnName rowSpan={4} name="" title="Faculty Assigned" />
            )}

            {index == 6 && (
              <ColumnName rowSpan={4} name="" title="Dean CEAFA" />
            )}

            {index == 8 && (
              <ColumnName
                rowSpan={10}
                name=""
                title="Executive Director, Main II"
              />
            )}
          </tr>

          {/* sections */}
          <tr className="h-8 w-fit text-center">
            <InputFaculty
              stateIndex={index}
              state={state}
              handleInputChange={handleInputChange}
            />

            {index < 4 && (
              <>
                <td></td>
                <td></td>
                <td></td>
              </>
            )}
          </tr>
        </Fragment>
      ))}
    </>
  );
}

export default RoomSchedule;
