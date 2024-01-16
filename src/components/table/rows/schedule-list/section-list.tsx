import { DAYS } from "@/constants/initial";
import { ISchedule } from "@/types/api";
import { ChangeEvent, Fragment } from "react";

interface SectionListProps {
  stateIndex: number;
  state: ISchedule[];
  onSectionChange: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
}

function InputSectionList({
  stateIndex,
  state,
  onSectionChange,
}: SectionListProps) {
  return (
    <>
      {DAYS.map((day, index) => (
        <Fragment key={index}>
          <td>
            <input
              type="text"
              name={day}
              value={state[stateIndex].schedules[index].section}
              onChange={(e) => onSectionChange(e, stateIndex)}
              tabIndex={index}
            />
          </td>
        </Fragment>
      ))}
    </>
  );
}

export default InputSectionList;
