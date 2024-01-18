import { getRoomList } from "@/services/api/room";
import { ChangeEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function SelectRoom() {
  const [rooms, setRooms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedValue, setSelectedValue] = useState(
    searchParams.get("id") || "",
  );

  useEffect(() => {
    const fetchData = async () => {
      const roomList = await getRoomList();
      setRooms(roomList);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const params = searchParams.get("id");
    if (params == "") {
      searchParams.delete("id");
      setSearchParams(searchParams);
    }
  }, [searchParams]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
    setSearchParams({ id: e.target.value });
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
          <option key={room} value={room}>
            {room}
          </option>
        ))}
    </select>
  );
}

export default SelectRoom;
