import axios from "axios";

const api = axios.create({
  baseURL: "https://devpath-ai.onrender.com/api",
});

export default api;