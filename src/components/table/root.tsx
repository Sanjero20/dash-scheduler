import "./table.scss";

import LogoRevision from "./rows/logo-revision";
import TableTitle from "./rows/table-title";
import TableMetadata from "./rows/table-metadata";
import ScheduleHeader from "./rows/schedule-header";
import ScheduleList from "./rows/schedule-list";

function MainTable() {
  return (
    <table id="table-schedule" className="h-full w-full">
      <tbody>
        <LogoRevision />
        <TableTitle />
        <TableMetadata />
        <ScheduleHeader />
        <ScheduleList />
      </tbody>
    </table>
  );
}

export default MainTable;
