import { IAccount, IFaculty } from "@/types/api";
import { api } from "../config";

export async function getAccounts(): Promise<IAccount[]> {
  const response = await api.get("/users");
  const users = await response.data;
  return users.rows;
}

export async function createAccount(username: string, password: string) {
  const response = await api.post("/users/register", { username, password });
  return await response.data;
}

export async function getFaculties(): Promise<IFaculty[]> {
  const response = await api.get("faculties");
  const faculties = await response.data;

  console.log(faculties);
  return faculties.rows;
}

export async function createFaculty(name: string, initials: string) {
  const response = await api.post("/faculties/add", { name, initials });
  return await response.data;
}
