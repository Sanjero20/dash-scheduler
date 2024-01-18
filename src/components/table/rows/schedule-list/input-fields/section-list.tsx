import { DAYS } from "@/constants/initial";
import { ISchedule } from "@/types/api";
import { ChangeEvent, Fragment } from "react";

interface SectionListProps {
  stateIndex: number;
  state: ISchedule[];
  handleInputChange: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
}

function InputSectionList({
  stateIndex,
  state,
  handleInputChange,
}: SectionListProps) {
  return (
    <>
      {DAYS.map((day, index) => (
        <Fragment key={index}>
          <td>
            <input
              type="text"
              name={`${day}-section`}
              value={state[stateIndex].schedules[index].section}
              onChange={(e) => handleInputChange(e, stateIndex)}
              tabIndex={index}
            />
          </td>
        </Fragment>
      ))}
    </>
  );
}

export default InputSectionList;
