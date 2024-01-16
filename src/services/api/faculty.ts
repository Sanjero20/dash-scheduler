import { api } from "../config";

export async function getSchedulesByUser(user_id: number) {
  const response = await api.get(`/schedules/user/${user_id}`);
  const schedules = await response.data;
  return schedules;
}
