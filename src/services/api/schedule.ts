import { ISchedule } from "@/types/api";
import { api } from "../config";

export async function getSectionList() {
  const response = await api.get(`/details/sections`);
  const data = await response.data;
  return data.schedules;
}

export async function getSectionDetails(section: string): Promise<ISchedule[]> {
  const response = await api.get(`/schedules/section/formatted/${section}`);
  const classData = await response.data;
  return classData;
}
