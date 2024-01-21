/* eslint-disable @typescript-eslint/no-explicit-any */
import { ISchedule, IFaculty, ITotal, IOverallSummary } from "@/types/api";
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

export async function getFacultySummary(id: string) {
  const response = await api.get(`/details/schedules/${id}`);
  const data = await response.data;
  return data;
}

export async function getFaculties(): Promise<IFaculty[]> {
  const response = await api.get("/faculties");
  const faculties = response.data;
  return faculties.rows;
}

export async function deleteFaculty(initials: string) {
  const response = await api.delete(`/faculties/remove/${initials}`);
  return response;
}

export async function getFacultyFooter(id: string) {
  const response = await api.get(`/details/footer/${id}`);
  return await response.data;
}

export async function saveFacultyFooter(
  id: string,
  total: ITotal,
  summary: IOverallSummary,
) {
  const response = await api.post("/details/footer", { id, total, summary });
  const data = response.data;
  console.log(data);
}
