import axios from "axios";
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "content-type": "application/json",
    Accept: "application/json",
  },
});

//Endpoints
export const sendOtp = (data) => api.post("/send-otp", data);
export const verifyOtp = (data) => api.post("/verify-otp", data);
export const activate = (data) => api.post("/activate", data);
export default api;
