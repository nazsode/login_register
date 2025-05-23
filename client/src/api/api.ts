import axios from "axios";
import { useAuthStore } from "../store";

const axiosInstance = axios.create({
  baseURL: "http://192.168.1.105:5000/api",
});

axiosInstance.interceptors.request.use((config) => {
  const user = useAuthStore.getState().user;
  if (user?.token) {
    config.headers.Authorization = "Bearer: {user.token}";
  }
  return config;
});

export default axiosInstance;
