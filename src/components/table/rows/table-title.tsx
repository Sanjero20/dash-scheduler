function TableTitle() {
  const title = "faculty schedule";

  return (
    <tr>
      <td colSpan={19} className="w-full text-center font-bold uppercase">
        {title}
      </td>
    </tr>
  );
}

export default TableTitle;
