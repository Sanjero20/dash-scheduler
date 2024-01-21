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

export interface IAccount {
  id: number;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Data;
}

export interface ITotal {
  officialTime: string[];
  teachingHours: number[];
  overtimeWithin: string[];
  overtimeOutside: string[];
}

export interface IOverallSummary {
  designation: string;
  preparations: number;
  hoursPerWeek: number;
  regularLoad: number;
  overload: number;
  academicRank: string;
  consultationHours: string;
}
