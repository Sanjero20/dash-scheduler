function FacultySummary() {
  return (
    <>
      <tr className="text-sm">
        <td className="uppercase">Designation: </td>
        <td colSpan={14}></td>
      </tr>

      <tr className="text-xs uppercase">
        <td colSpan={2}>no. of preparations: </td>
        <td colSpan={3}></td>

        <td colSpan={2}>regular load: </td>
        <td colSpan={3}></td>

        <td colSpan={2}>academic rank: </td>
        <td colSpan={3}></td>
      </tr>

      <tr className="text-xs uppercase">
        <td colSpan={2}>no. of hours per week: </td>
        <td colSpan={3}></td>

        <td colSpan={2}>overload: </td>
        <td colSpan={3}></td>

        <td colSpan={2}>consultation hour: </td>
        <td colSpan={3}></td>
      </tr>
    </>
  );
}

export default FacultySummary;
