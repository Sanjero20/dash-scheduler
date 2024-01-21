import { ChangeEvent } from "react";

interface Props {
  list: string[];
  handler: React.Dispatch<React.SetStateAction<string[]>>;
}

function InputTeachingHours({ list, handler }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    const updatedList = list.map((existingValue, i) =>
      i === index ? value : existingValue,
    );
    return handler(updatedList);
  };

  return (
    <tr>
      <td className="text-sm">No. of Teaching Hours</td>
      {list.map((_item, index) => (
        <td key={index} colSpan={2}>
          {index == 5 ? (
            <p className="text-end font-bold">TOTAL</p>
          ) : (
            <input
              type="text"
              value={list[index]}
              onChange={(e) => handleChange(e, index)}
            />
          )}
        </td>
      ))}
    </tr>
  );
}

export default InputTeachingHours;