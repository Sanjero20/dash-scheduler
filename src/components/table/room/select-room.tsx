import { ChangeEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function SelectRoom() {
  const [rooms, setRooms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // const roomList = await getRoomsList()
      //
    };

    fetchData();
  });

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
    setSearchParams({ roomId: e.target.value });
  };

  return (
    <select
      value={selectedValue}
      onChange={handleChange}
      className="rounded p-1"
    >
      <option value="" disabled>
        Select Room
      </option>

      {rooms &&
        rooms.map((room) => (
          <option key={room.id} value={room.id}>
            {room.name}
          </option>
        ))}
    </select>
  );
}

export default SelectRoom;
