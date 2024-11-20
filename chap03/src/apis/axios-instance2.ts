import axios from 'axios'

export const axiosInstance2 = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
})

export default axiosInstance2