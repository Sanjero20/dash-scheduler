export interface IScheduleData {
  day: string;
  course: string;
  room: string;
  section: string;
  initials: string;
  conflicted?: boolean;
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
