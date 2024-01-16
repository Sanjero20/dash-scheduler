import { Fragment, useEffect } from "react";
import { SCHEDULES } from "@/constants/initial";
import ColumnName from "./names";

function ScheduleList() {
  useEffect(() => {}, []);

  return (
    <>
      {SCHEDULES.map((schedule, index) => (
        <Fragment key={index}>
          {/* template */}
          <tr className="h-8 text-center">
            <td rowSpan={2}>{schedule}</td>

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
          <tr className="h-8 text-center">
            <td></td>
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
