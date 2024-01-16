import { ChangeEvent, Fragment, useReducer } from "react";
import { SCHEDULES, createSchedulePerTime } from "@/constants/initial";
import ColumnName from "./names";
import { ISchedule } from "@/types/api";

type IAction =
  | { type: "UPDATE_COURSE"; index: number; day: string; value: string }
  | { type: "UPDATE_SECTION"; index: number; day: string; value: string }
  | { type: "UPDATE_ROOM"; index: number; day: string; value: string };

const scheduleReducer = (state: ISchedule[], action: IAction) => {
  switch (action.type) {
    case "UPDATE_COURSE":
      return state.map((schedule, index) =>
        index === action.index
          ? {
              ...schedule,
              schedules: schedule.schedules.map((day) => {
                if (day.day === action.day) {
                  return { ...day, course: action.value };
                }
                return day;
              }),
            }
          : schedule,
      );

    case "UPDATE_SECTION":
      return state.map((schedule, index) =>
        index === action.index
          ? {
              ...schedule,
              schedules: schedule.schedules.map((day) => {
                if (day.day === action.day) {
                  return { ...day, section: action.value };
                }
                return day;
              }),
            }
          : schedule,
      );

    case "UPDATE_ROOM":
      return state.map((schedule, index) =>
        index === action.index
          ? {
              ...schedule,
              schedules: schedule.schedules.map((day) => {
                if (day.day === action.day) {
                  return { ...day, room: action.value };
                }
                return day;
              }),
            }
          : schedule,
      );
  }
};

const initialState = createSchedulePerTime();

function ScheduleList() {
  const [state, dispatch] = useReducer(scheduleReducer, initialState);

  console.clear();
  console.table(state[0].schedules[0]);

  const handleCourseInput = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { value, name } = e.target;
    dispatch({ type: "UPDATE_COURSE", index, day: name, value });
  };

  const handleSectionInput = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { value, name } = e.target;
    dispatch({ type: "UPDATE_SECTION", index, day: name, value });
  };

  const handleRoomInput = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value, name } = e.target;
    dispatch({ type: "UPDATE_ROOM", index, day: name, value });
  };

  return (
    <>
      {SCHEDULES.map((schedule, index) => (
        <Fragment key={index}>
          {/* template */}
          <tr className="h-8 text-center">
            <td rowSpan={2}>{schedule}</td>

            <td rowSpan={1}>
              <input
                type="text"
                name="monday"
                value={state[index].schedules[0].course}
                onChange={(e) => handleCourseInput(e, index)}
              />
            </td>

            <td rowSpan={2}>
              <input
                type="text"
                name="monday"
                value={state[index].schedules[0].room}
                onChange={(e) => handleRoomInput(e, index)}
              />
            </td>

            <td rowSpan={1}></td>
            <td rowSpan={2}></td>
            <td rowSpan={1}></td>
            <td rowSpan={2}></td>
            <td rowSpan={1}></td>
            <td rowSpan={2}></td>
            <td rowSpan={1}></td>
            <td rowSpan={2}></td>
            <td rowSpan={1}></td>
            <td rowSpan={2}></td>
            <td rowSpan={1}></td>
            <td rowSpan={2}></td>

            {index < 4 && (
              <>
                <td></td>
                <td></td>
                <td></td>
              </>
            )}

            {/* Columns for the names in the right side of the table */}
            {index == 4 && <ColumnName rowSpan={4} name="" title="" />}
            {index == 6 && <ColumnName rowSpan={4} name="" title="" />}
            {index == 8 && <ColumnName rowSpan={8} name="" title="" />}
          </tr>

          {/* sections */}
          <tr className="h-8 w-fit text-center">
            <td>
              <input
                type="text"
                name="monday"
                value={state[index].schedules[0].section}
                onChange={(e) => handleSectionInput(e, index)}
              />
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>

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

export default ScheduleList;
