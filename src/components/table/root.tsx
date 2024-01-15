import { useState } from "react";
import "./table.scss";
import Day from "./rows/schedules/header";
import Schedules from "./rows/schedules/main";

function MainTable() {
  const [title, setTitle] = useState("faculty schedule");

  return (
    <div id="table-schedule" className="h-full w-full">
      {/*  */}
      <table>
        <tbody>
          {/* Meta data */}
          <tr className="h-16">
            <td colSpan={1} className="h-16 w-[50px]">
              <img src="/university-logo.png" className="m-auto h-full" />
            </td>
            <td colSpan={7}>Reference No.: BatStateU-REC-COL-03</td>
            <td colSpan={7}> Effectivity Date: January 15, 2018</td>
            <td colSpan={6}> Revision No.: 01</td>
          </tr>

          {/* Title */}
          <tr>
            <td colSpan={19} className="w-full text-center font-bold uppercase">
              {title}
            </td>
          </tr>

          {/*  */}
          <tr>
            <td colSpan={1}>College: </td>
            <td colSpan={9}>
              College of Engineering, Architecture and Fine Arts
            </td>
            <td colSpan={1} className="">
              Campus:
            </td>
            <td colSpan={7} className="">
              Pablo Borbon Main II
            </td>
          </tr>

          <tr>
            <td colSpan={1}>Name of faculty: </td>
            <td colSpan={9}>(Dropdown)</td>
            <td>Semester:</td>
            <td colSpan={2} className="text-center">
              Second
            </td>
            <td colSpan={2} className="text-center">
              Academic Year:
            </td>
            <td colSpan={3} className="text-center">
              (Current Year)
            </td>
          </tr>

          {/* Schedule Header */}
          <tr className="h-12 text-center text-xs font-bold uppercase">
            <td className="w-[150px]">time</td>
            <Day />

            <td>subject</td>
            <td>section</td>
            <td className="w-[11px]">no. of students</td>
          </tr>

          {/* Schedule */}
          <Schedules />
        </tbody>
      </table>
    </div>
  );
}

export default MainTable;
