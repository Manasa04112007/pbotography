import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  // ❌ REMOVE THIS LINE
  // withCredentials: true,
});

export default API;
