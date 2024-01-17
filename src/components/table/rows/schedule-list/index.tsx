import { ChangeEvent, Fragment, useEffect, useReducer } from "react";
import { SCHEDULES, createSchedulePerTime } from "@/constants/initial";
import ColumnName from "./names";
import { ISchedule } from "@/types/api";
import InputDayList from "./day-list";
import InputSectionList from "./section-list";
import { getFormattedShedule } from "@/services/api/faculty";
import { useSchedule } from "@/stores/schedule";
import { useSearchParams } from "react-router-dom";

type IAction =
  | { type: "UPDATE_COURSE"; index: number; day: string; value: string }
  | { type: "UPDATE_SECTION"; index: number; day: string; value: string }
  | { type: "UPDATE_ROOM"; index: number; day: string; value: string }
  | { type: "SET_ALL"; value: ISchedule[] };

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

    case "SET_ALL":
      return action.value;
  }
};

const initialState = createSchedulePerTime();

function ScheduleList() {
  const [state, dispatch] = useReducer(scheduleReducer, initialState);
  const { setSchedules } = useSchedule();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    console.log("trigger");
    const userId = searchParams.get("userId");
    if (!userId) {
      setSchedules([]);
      return;
    }
    const fetchData = async () => {
      const data = await getFormattedShedule(parseInt(userId));

      console.log(data);
      dispatch({ type: "SET_ALL", value: data });
    };

    fetchData();
  }, [searchParams]);

  useEffect(() => {
    setSchedules(state);
  }, [state]);

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

            <InputDayList
              stateIndex={index}
              state={state}
              onChangeCourse={handleCourseInput}
              onChangeRoom={handleRoomInput}
            />

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
            <InputSectionList
              stateIndex={index}
              state={state}
              onSectionChange={handleSectionInput}
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

export default ScheduleList;
