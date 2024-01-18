/* eslint-disable @typescript-eslint/no-explicit-any */
import { ISchedule, IFaculty } from "@/types/api";
import { api } from "../config";

export async function getSchedulesByUser(user_id: number) {
  const response = await api.get(`/schedules/user/${user_id}`);
  const schedules = await response.data;
  return schedules;
}

export async function getFormattedShedule(
  user_id: number,
): Promise<ISchedule[]> {
  const response = await api.get(`/schedules/user/formatted/${user_id}`);
  const schedules = await response.data;
  return schedules;
}

export async function uploadSchedules(data: ISchedule[]) {
  try {
    const response = await api.post("/schedules/bulk/formatted", {
      rows: data,
    });
    return await response.data;
  } catch (error: any) {
    return error.response.data.message;
  }
}

export async function getFaculties(): Promise<IFaculty[]> {
  const response = await api.get("/faculties");
  const faculties = response.data;
  return faculties.rows;
}
