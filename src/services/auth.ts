import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export async function loginAccount(username: string, password: string) {
  try {
    const response = await axios.post("/login", { username, password });
    return await response.data;
  } catch (error: any) {
    return error.response.data.message;
  }
}

export async function logoutAccount() {
  const response = await axios.get("/logout");
  console.log(response);
}
