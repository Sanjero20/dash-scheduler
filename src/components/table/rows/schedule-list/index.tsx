/* eslint-disable react-hooks/exhaustive-deps */
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
  | { type: "SET_ALL"; value: ISchedule[] }
  | {
      type: "UPDATE_VALUE";
      index: number;
      day: string;
      key: string;
      value: string;
    };

const scheduleReducer = (state: ISchedule[], action: IAction) => {
  switch (action.type) {
    case "SET_ALL":
      return action.value;

    case "UPDATE_VALUE":
      return state.map((schedule, index) =>
        index === action.index
          ? {
              ...schedule,
              schedules: schedule.schedules.map((day) => {
                if (day.day === action.day) {
                  return { ...day, [action.key]: action.value };
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
  const { setSchedules } = useSchedule();

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

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { value, name } = e.target;

    // Split name to day and key
    const inputValues = name.split("-");
    const day = inputValues[0];
    const key = inputValues[1];

    dispatch({ type: "UPDATE_VALUE", index, day, key, value });
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
                rowSpan={8}
                name=""
                title="Executive Director, Main II"
              />
            )}
          </tr>

          {/* sections */}
          <tr className="h-8 w-fit text-center">
            <InputSectionList
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

export default ScheduleList;
