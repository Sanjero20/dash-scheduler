import { SCHEDULES } from "@/constants/initial";
import useScheduleList from "@/hooks/useScheduleList";
import { Fragment } from "react";
import { useSearchParams } from "react-router-dom";
import ColumnName from "../rows/schedule-list/names";
import InputCol from "./input/input-col";
import InputFaculty from "./input/input-faculty";

function RoomSchedule() {
  const [state, dispatch, handleInputChange] = useScheduleList();
  const [searchParams] = useSearchParams();

  console.clear();
  console.table(state[0].schedules);

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
