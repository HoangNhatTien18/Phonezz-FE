import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http:/172.16.52.228:1808' 
})

export default axiosInstance;   