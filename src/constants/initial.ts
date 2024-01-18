import { IScheduleData, ISchedule } from "@/types/api";

export const DAYS = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export const SCHEDULES = [
  "06:00 - 07:00",
  "07:00 - 08:00",
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "12:00 - 01:00",
  "01:00 - 02:00",
  "02:00 - 03:00",
  "03:00 - 04:00",
  "04:00 - 05:00",
  "05:00 - 06:00",
  "06:00 - 07:00",
  "07:00 - 08:00",
];

export const initialTableData = {
  title: "faculty schedule",
  college: "college of engineering, architecture and fine arts",
  campus: "pablo borbon main II",
  semester: "second",
  academicYear: "2023-2024",
};

export function createSchedulePerTime() {
  const array: ISchedule[] = [];

  for (const time of SCHEDULES) {
    const daySchedules: IScheduleData[] = [];

    for (const day of DAYS) {
      const newSchedule: IScheduleData = {
        day,
        course: "",
        section: "",
        room: "",
        initials: "",
      };

      daySchedules.push(newSchedule);
    }

    array.push({ time, schedules: daySchedules });
  }

  return array;
}
