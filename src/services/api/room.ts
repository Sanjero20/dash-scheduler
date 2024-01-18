import { ISchedule } from "@/types/api";
import { api } from "../config";

export async function getRoomList() {
  const response = await api.get("/details/rooms");
  const roomData = await response.data;
  return roomData.rooms;
}

export async function getRoomDataByCode(
  roomCode: string,
): Promise<ISchedule[]> {
  const response = await api.get(`/schedules/room/formatted/${roomCode}`);
  const roomDetails = await response.data;
  return roomDetails;
}
