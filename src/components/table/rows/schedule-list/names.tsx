interface ColProps {
  rowSpan: number;
  name: string;
  title: string;
}

function ColumnName({ rowSpan, name, title }: ColProps) {
  return (
    <td rowSpan={rowSpan} colSpan={3}>
      <br />
      <br />
      <p className="uppercase">{name || "name"}</p>
      <p className="font-bold">{title || "Title"}</p>
    </td>
  );
}

export default ColumnName;
