import "./table.scss";

function MainTable() {
  return (
    <div id="table-schedule" className="h-full w-full">
      {/*  */}
      <table>
        <tr className="h-16">
          <td className="h-16 w-32">
            <img src="/university-logo.png" className="m-auto h-full" />
          </td>
          <td> Reference No.: BatStateU-REC-COL-03</td>
          <td> Effectivity Date: January 15, 2018</td>
          <td> Revision No.: 01</td>
        </tr>

        <tr>
          <td colSpan={19} className="text-center font-bold">
            {/* DYNAMIC TITLE */}
            FACULTY SCHEDULE
          </td>
        </tr>
      </table>
    </div>
  );
}

export default MainTable;
