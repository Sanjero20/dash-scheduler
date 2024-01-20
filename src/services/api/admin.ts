import { api } from "../config";

export async function getUsers() {
  const response = await "/users";
}

export async function createUser(username: string, password: string) {
  const response = await api.post("/users/register", { username, password });
}

export async function getFaculties() {
  const response = await api.get("faculties");
}

export async function createFaculty(name: string, initials: string) {
  const response = await api.post("/faculties/add", { name, initials });
}
