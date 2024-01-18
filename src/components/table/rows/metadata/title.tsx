interface TableTitleProps {
  title: string;
}

function TableTitle({ title }: TableTitleProps) {
  return (
    <tr>
      <td colSpan={19} className="w-full text-center font-bold uppercase">
        {title}
      </td>
    </tr>
  );
}

export default TableTitle;
