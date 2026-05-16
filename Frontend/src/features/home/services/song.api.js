import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export async function getSong({ mood }) {
  try {
    const response = await api.get("/api/songs?mood=" + mood);

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error.response?.data || error.message);

    throw error;
  }
}