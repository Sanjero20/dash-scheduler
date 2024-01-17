import SelectFaculty from "../faculty/select-faculty";

function TableMetadata() {
  return (
    <>
      {/* Third Row */}
      <tr>
        <td colSpan={1}>College: </td>
        <td colSpan={9}>College of Engineering, Architecture and Fine Arts</td>
        <td colSpan={1} className="">
          Campus:
        </td>
        <td colSpan={7} className="">
          Pablo Borbon Main II
        </td>
      </tr>

      {/* Fourth Row */}
      <tr>
        <td colSpan={1}>Name of faculty: </td>
        <td colSpan={9}>
          <SelectFaculty />
        </td>
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
    </>
  );
}

export default TableMetadata;
