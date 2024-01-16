import { Fragment } from "react";

const DAYS = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

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
