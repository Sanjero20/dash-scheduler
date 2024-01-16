import { DAYS } from "@/constants/initial";
import { ISchedule } from "@/types/api";
import { ChangeEvent, Fragment } from "react";

interface DayListProps {
  stateIndex: number;
  state: ISchedule[];
  onChangeCourse: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
  onChangeRoom: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
}

function InputDayList({
  stateIndex,
  state,
  onChangeCourse,
  onChangeRoom,
}: DayListProps) {
  return (
    <>
      {DAYS.map((day, index) => (
        <Fragment key={index}>
          <td rowSpan={1}>
            <input
              type="text"
              name={day}
              value={state[stateIndex].schedules[index].course}
              onChange={(e) => onChangeCourse(e, stateIndex)}
              tabIndex={index}
            />
          </td>

          <td rowSpan={2}>
            <input
              type="text"
              name={day}
              value={state[stateIndex].schedules[index].room}
              onChange={(e) => onChangeRoom(e, stateIndex)}
              tabIndex={index}
            />
          </td>
        </Fragment>
      ))}
    </>
  );
}

export default InputDayList;
