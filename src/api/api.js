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
        config.headers.Authorization = `Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbkBwb3MuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzgwNDA0NjM0LCJleHAiOjE3ODA0OTEwMzR9.7ppHvWGYFGzS5dtV6nIS18X34KybqsW1v2syMQoexV6aChEqrEW-t7uJc3B2Sbmh`
    }
    return config;
})

export default api;
