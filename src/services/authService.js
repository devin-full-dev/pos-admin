import api from "../api/api";

export const authService = {
    login: async (email, password) => {
        const res = await api.post("/api/auth/login", { email, password })
        return res.data
    },
}
