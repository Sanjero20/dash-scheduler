interface ScheduleInfoProps {
  category: string;
  dropdown: React.ReactNode;
}

function ScheduleInfo({ category, dropdown }: ScheduleInfoProps) {
  return (
    <tr className="h-10">
      <td colSpan={1}>{category}: </td>
      <td colSpan={9}>{dropdown}</td>
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
  );
}

export default ScheduleInfo;
