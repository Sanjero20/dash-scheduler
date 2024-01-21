import { IOverallSummary } from "@/types/api";
import { ChangeEvent, useReducer } from "react";

type Action =
  | { type: "SET_ALL"; value: IOverallSummary }
  | { type: "UPDATE_VALUE"; key: string; value: string };

const reducer = (state: IOverallSummary, action: Action) => {
  switch (action.type) {
    case "SET_ALL":
      return action.value;
    case "UPDATE_VALUE":
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }
};

const initialState: IOverallSummary = {
  designation: "",
  preparations: "",
  hoursPerWeek: "",
  regularLoad: "",
  overload: "",
  academicRank: "",
  consultationHours: "",
};

function FacultySummary() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_VALUE", key: name, value });
  };

  console.clear();
  console.table(state);

  return (
    <>
      <tr className="text-sm">
        <td className="uppercase">Designation: </td>
        <td colSpan={14}>
          <input
            type="text"
            name="designation"
            value={state.designation}
            onChange={handleInputChange}
          />
        </td>
      </tr>

      <tr className="text-xs uppercase">
        <td colSpan={2}>no. of preparations: </td>
        <td colSpan={3} className="font-bold">
          <input
            type="text"
            name="preparations"
            value={state.preparations}
            onChange={handleInputChange}
          />
        </td>

        <td colSpan={2}>regular load: </td>
        <td colSpan={3} className="font-bold">
          <input
            type="text"
            name="regularLoad"
            value={state.regularLoad}
            onChange={handleInputChange}
          />
        </td>

        <td colSpan={2}>academic rank: </td>
        <td colSpan={3} className="font-bold">
          <input
            type="text"
            name="academicRank"
            value={state.academicRank}
            onChange={handleInputChange}
          />
        </td>
      </tr>

      <tr className="text-xs uppercase">
        <td colSpan={2}>no. of hours per week: </td>
        <td colSpan={3} className="font-bold">
          <input
            type="text"
            name="hoursPerWeek"
            value={state.hoursPerWeek}
            onChange={handleInputChange}
          />
        </td>

        <td colSpan={2}>overload: </td>
        <td colSpan={3} className="font-bold">
          <input
            type="text"
            name="overload"
            value={state.overload}
            onChange={handleInputChange}
          />
        </td>

        <td colSpan={2}>consultation hour: </td>
        <td colSpan={3} className="font-bold">
          <input
            type="text"
            name="consultationHours"
            value={state.consultationHours}
            onChange={handleInputChange}
          />
        </td>
      </tr>
    </>
  );
}

export default FacultySummary;
