/* eslint-disable @typescript-eslint/no-explicit-any */
import { IFormDetails } from "@/types/api";
import { api } from "../config";

export async function getFormDetails(): Promise<IFormDetails> {
  return (await api.get('/form-details')).data;
}