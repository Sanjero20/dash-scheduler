import MainTable from "@/components/table/root";
import CollegeInfo from "@/components/table/rows/metadata/college-info";
import LogoRevision from "@/components/table/rows/metadata/logo-revision";
import ScheduleInfo from "@/components/table/rows/metadata/schedule-info";
import TableTitle from "@/components/table/rows/metadata/title";
import ScheduleHeader from "@/components/table/rows/schedule-header";

function ClassSchedulePage() {
  return (
    <div>
      <MainTable>
        <LogoRevision
          refNumber="04"
          effectivityDate="January 3, 2019"
          revisionNumber="02"
        />

        <TableTitle title="Class Schedule" />
        <CollegeInfo />
        <ScheduleInfo category="Section" dropdown />

        <ScheduleHeader category="RM" />
      </MainTable>
    </div>
  );
}

export default ClassSchedulePage;
