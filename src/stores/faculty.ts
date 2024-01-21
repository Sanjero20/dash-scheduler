import { create } from "zustand";
import { IOverallSummary, ITotal } from "@/types/api";
import { DAYS } from "@/constants/initial";

interface States {
  total: ITotal;
  summary: IOverallSummary;
}

interface Actions {
  setTotal: (value: ITotal) => void;
  setSummary: (value: IOverallSummary) => void;
}

export const initialValues = DAYS.map(() => "");

export const initialTotal: ITotal = {
  officialTime: initialValues,
  teachingHours: initialValues,
  overtimeWithin: initialValues,
  overtimeOutside: initialValues,
};

export const initialSummary: IOverallSummary = {
  designation: "",
  preparations: "",
  hoursPerWeek: "",
  regularLoad: "",
  overload: "",
  academicRank: "",
  consultationHours: "",
};

export const useFacultyStore = create<States & Actions>((set) => ({
  total: initialTotal,
  summary: initialSummary,

  setTotal: (value) => set({ total: value }),
  setSummary: (value) => set({ summary: value }),
}));
