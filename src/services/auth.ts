import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export async function loginAccount(username: string, password: string) {
  const response = await axios.post("/login", { username, password });
}

export async function logoutAccount() {
  const response = await axios.get("/logout");
}

export async function checkToken(token: string) {
  const response = await axios.get(`/check/${token}`);
}
