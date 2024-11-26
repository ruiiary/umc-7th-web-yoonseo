// axios-instance.ts
import axios from 'axios'

export const axiosInstance1 = axios.create({
  baseURL: import.meta.env.VITE_MOVIE_API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_MY_API}`,
  }, 
})

export default axiosInstance1



