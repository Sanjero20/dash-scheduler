import { DAYS } from "@/constants/initial";
import { ISchedule } from "@/types/api";
import { ChangeEvent, Fragment } from "react";

interface Props {
  stateIndex: number;
  state: ISchedule[];
  handleInputChange: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
}

function InputSection({ stateIndex, state, handleInputChange }: Props) {
  const schedulesValue = state[stateIndex].schedules;

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
              disabled={!schedulesValue[index].initials}
            />
          </td>
        </Fragment>
      ))}
    </>
  );
}

export default InputSection;
