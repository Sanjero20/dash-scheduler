import { Fragment } from "react";
import { DAYS } from "@/constants/initial";

function DayList() {
  return (
    <>
      {DAYS.map((day, index) => (
        <Fragment key={index}>
          <td className="w-24">{day}</td>
          <td className="w-16">room</td>
        </Fragment>
      ))}
    </>
  );
}

export default DayList;
