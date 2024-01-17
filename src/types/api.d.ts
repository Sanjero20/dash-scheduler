export interface IScheduleData {
  day: string;
  course: string;
  room: string;
  section: string;
  initials: string;
}

export interface ISchedule {
  time: string;
  schedules: IScheduleData[];
}

export interface IFaculty {
  id: number;
  name: string;
  initials: string;
}
