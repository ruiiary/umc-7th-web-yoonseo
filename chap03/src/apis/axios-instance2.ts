import axios from 'axios'

export const axiosInstance2 = axios.create({
  baseURL: "http://localhost:3000/",

})

export default axiosInstance2