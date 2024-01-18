import { createSchedulePerTime } from "@/constants/initial";
import { ISchedule } from "@/types/api";
import { useReducer, ChangeEvent } from "react";

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

function useScheduleList() {
  const [state, dispatch] = useReducer(scheduleReducer, initialState);

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

  return [state, dispatch, handleInputChange] as const;
}

export default useScheduleList;
