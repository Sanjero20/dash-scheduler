interface ScheduleInfoProps {
  year: number | string;
  semester: string;
  category: string;
  dropdown: React.ReactNode;
}

function ScheduleInfo({
  year,
  semester,
  category,
  dropdown,
}: ScheduleInfoProps) {
  return (
    <tr className="h-10">
      <td colSpan={1}>{category}: </td>
      <td colSpan={9}>{dropdown}</td>
      <td>Semester:</td>
      <td colSpan={2} className="text-center">
        {semester}
      </td>
      <td colSpan={2} className="text-center">
        Academic Year:
      </td>
      <td colSpan={3} className="text-center">
        {year}
      </td>
    </tr>
  );
}

export default ScheduleInfo;
