import MainTable from "@/components/table/root";
import LogoRevision from "@/components/table/rows/metadata/logo-revision";
import TableTitle from "@/components/table/rows/metadata/title";
import CollegeInfo from "@/components/table/rows/metadata/college-info";
import ScheduleInfo from "@/components/table/rows/metadata/schedule-info";
import ScheduleHeader from "@/components/table/rows/schedule-header";
import SelectFaculty from "@/components/table/faculty/select-faculty";
import FacultySchedule from "@/components/table/faculty/faculty-schedule";
import FacultySummary from "@/components/table/faculty/footer/faculty-summary";
import FacultyTotal from "@/components/table/faculty/footer/faculty-total";

function FacultySchedulePage() {
  return (
    <div>
      <MainTable>
        <LogoRevision
          refNumber="01"
          effectivityDate="January 3, 2017"
          revisionNumber="00"
        />

        {/* Table Info */}
        <TableTitle title="faculty schedule" />
        <CollegeInfo />
        <ScheduleInfo category="Name of faculty" dropdown={<SelectFaculty />} />

        <ScheduleHeader category="room" />
        <FacultySchedule />
        <FacultyTotal />
        <FacultySummary />
      </MainTable>
    </div>
  );
}
export default FacultySchedulePage;
