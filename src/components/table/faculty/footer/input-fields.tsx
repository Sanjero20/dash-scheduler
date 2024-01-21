import React, { ChangeEvent } from "react";

interface Props {
  title: string;
  list: string[];
  handler: React.Dispatch<React.SetStateAction<string[]>>;
  children?: React.ReactNode;
}

function InputFields({ title, list, handler, children }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    const currentTimes = list.map((day, i) => (i == index ? value : day));
    handler(currentTimes);
  };

  return (
    <tr className="text-sm">
      <td>{title}</td>

      {/* map by day */}
      {list.map((_day, index) => (
        <td key={index} colSpan={2}>
          <input value={list[index]} onChange={(e) => handleChange(e, index)} />
        </td>
      ))}

      {/* Children */}
      {children}
    </tr>
  );
}

export default InputFields;
