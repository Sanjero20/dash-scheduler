import DayList from "./day-column";

interface Props {
  category: string;
}

function ScheduleHeader({ category }: Props) {
  return (
    <tr className="h-12 text-center text-xs font-bold uppercase">
      <td className="w-[150px]">time</td>
      <DayList category={category} />

      <td>subject</td>
      <td>section</td>
      <td className="w-[11px]">no. of students</td>
    </tr>
  );
}

export default ScheduleHeader;
