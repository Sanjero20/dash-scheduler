import ColumnName from "./names";

interface Props {
  rowSpan: number;
}

function DeanRow({ rowSpan }: Props) {
  return (
    <ColumnName
      rowSpan={rowSpan}
      name="DR. CRISTINA AMOR M. ROSALES"
      title="Dean, COE"
    />
  );
}

function ViceChancellorRow({ rowSpan }: Props) {
  return (
    <ColumnName
      rowSpan={rowSpan}
      name="Prof. PAULINA M. MACATANGAY, VCAA"
      title=""
    />
  );
}

export { DeanRow, ViceChancellorRow };
