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

function DayHeader() {
  return (
    <>
      {DAYS.map((day, index) => (
        <Fragment key={index}>
          <td className="w-24">{day}</td>
          <td className="w-16">Sec</td>
        </Fragment>
      ))}
    </>
  );
}

export default DayHeader;
