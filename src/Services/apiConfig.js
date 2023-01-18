import axios from "axios";

const api = axios.create({
    baseURL:"https://apiproject2-production.up.railway.app",
});

export default api;