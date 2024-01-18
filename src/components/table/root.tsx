import "./table.scss";

import LogoRevision from "./rows/logo-revision";
import TableTitle from "./rows/table-title";
import TableMetadata from "./rows/table-metadata";
import ScheduleHeader from "./rows/schedule-header";
import ScheduleList from "./rows/schedule-list";
import FacultySummary from "./faculty/faculty-summary";
import FacultyTotal from "./faculty/faculty-total";

interface MainTableProps {
  title: string;
}

function MainTable({ title }: MainTableProps) {
  return (
    <table id="table-schedule" className="h-full w-full">
      <tbody>
        <LogoRevision />
        <TableTitle title={title} />
        <TableMetadata />
        <ScheduleHeader />
        <ScheduleList />
        <FacultySummary />
        <FacultyTotal />
      </tbody>
    </table>
  );
}

export default MainTable;
