import { createSchedulePerTime } from "@/constants/initial";
import { ISchedule } from "@/types/api";
import { create } from "zustand";

interface States {
  schedules: ISchedule[];
}

interface Actions {
  setSchedules: (schedule: ISchedule[]) => void;
  getSchedules: () => ISchedule[];
}

const initialData = createSchedulePerTime();

export const useSchedule = create<States & Actions>((set, get) => ({
  schedules: initialData,
  setSchedules: (schedules) => set({ schedules }),
  getSchedules: () => get().schedules,
}));
