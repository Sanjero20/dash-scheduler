// Due to time constraints,
// the developer was forced to use 120% of his power sacrificing code readability
// TODO: Clean up code

const SCHEDULES = [
  "06:00 - 07:00",
  "07:00 - 08:00",
  "08:00 - 09:00",
  "09:00 - 10:10",
  "10:00 - 11:00",
  "12:00 - 01:00",
  "01:00 - 02:00",
  "02:00 - 03:00",
  "03:00 - 04:00",
  "04:00 - 05:00",
  "05:00 - 06:00",
  "06:00 - 07:00",
];

function Schedules() {
  return (
    <>
      {SCHEDULES.map((schedule, index) => (
        <>
          {/* template */}

          <tr className="h-8 text-center">
            <td rowSpan={2}>{schedule}</td>

            <td rowSpan={1}></td>
            <td rowSpan={2}></td>

            <td rowSpan={1}></td>
            <td rowSpan={2}></td>

            <td rowSpan={1}></td>
            <td rowSpan={2}></td>

            <td rowSpan={1}></td>
            <td rowSpan={2}></td>

            <td rowSpan={1}></td>
            <td rowSpan={2}></td>

            <td rowSpan={1}></td>
            <td rowSpan={2}></td>

            <td rowSpan={1}></td>
            <td rowSpan={2}></td>

            {index < 4 && (
              <>
                <td></td>
                <td></td>
                <td></td>
              </>
            )}

            {index == 4 && (
              <td rowSpan={4} colSpan={3}>
                <p className="uppercase">name</p>
                <p className="font-bold">title</p>
              </td>
            )}

            {index == 6 && (
              <td rowSpan={4} colSpan={3}>
                <p className="uppercase">name</p>
                <p className="font-bold">title</p>
              </td>
            )}

            {index == 8 && (
              <td rowSpan={8} colSpan={3}>
                <p className="uppercase">name</p>
                <p className="font-bold">title</p>
              </td>
            )}
          </tr>

          {/* sections */}
          <tr className="h-8 text-center">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>

            {index < 4 && (
              <>
                <td></td>
                <td></td>
                <td></td>
              </>
            )}
          </tr>
        </>
      ))}
    </>
  );
}

export default Schedules;
