import { DAYS } from "@/constants/initial";
import { useScheduleStore } from "@/stores/schedule";
import { ISchedule } from "@/types/api";
import { ChangeEvent, Fragment } from "react";
import TextAreaAutoSize from "react-textarea-autosize";

interface DayListProps {
  stateIndex: number;
  state: ISchedule[];
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
  ) => void;
}

function InputCol({ stateIndex, state, handleInputChange }: DayListProps) {
  const { getSchedules } = useScheduleStore();

  return (
    <>
      {DAYS.map((day, index) => (
        <Fragment key={index}>
          {/*  */}
          <td rowSpan={1}>
            <input
              type="text"
              name={`${day}-course`}
              value={state[stateIndex].schedules[index].course}
              onChange={(e) => handleInputChange(e, stateIndex)}
              tabIndex={index}
            />
          </td>

          {/* The big field */}
          <td
            rowSpan={2}
            className={
              getSchedules()[stateIndex].schedules[index].conflicted
                ? "bg-red-400"
                : ""
            }
          >
            <TextAreaAutoSize
              className="h-full w-full resize-none text-center"
              minRows={2}
              name={`${day}-room`}
              value={state[stateIndex].schedules[index].room}
              onChange={(e) => handleInputChange(e, stateIndex)}
              tabIndex={index}
            />
          </td>
        </Fragment>
      ))}
    </>
  );
}

export default InputCol;
