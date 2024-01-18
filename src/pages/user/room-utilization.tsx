import SelectRoom from "@/components/table/room/select-room";
import MainTable from "@/components/table/root";
import CollegeInfo from "@/components/table/rows/metadata/college-info";
import LogoRevision from "@/components/table/rows/metadata/logo-revision";
import ScheduleInfo from "@/components/table/rows/metadata/schedule-info";
import TableTitle from "@/components/table/rows/metadata/title";

function RoomUtilizationPage() {
  return (
    <div>
      <MainTable>
        <LogoRevision
          refNumber="03"
          effectivityDate="January 3, 2019"
          revisionNumber="02"
        />

        <TableTitle title="room utilization" />
        <CollegeInfo />
        <ScheduleInfo category="Room" dropdown={<SelectRoom />} />
      </MainTable>
    </div>
  );
}

export default RoomUtilizationPage;
