import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "",
    headers: {
        "Content-Type": "application/json",
    },
    "timeout": "10000"
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    console.log("config:", config, token)
    if (token) {
        config.headers.Authorization = `Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbkBwb3MuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzgwNzYwMzYxLCJleHAiOjE3ODA4NDY3NjF9.kYNHiPrexDo5hhZ32t5_9YMRRnpz7aRA1Ogqji8kdd8zORPZikMoySQK3cBAz5Ig`
    }
    return config;
})

export default api;
