import { create } from "zustand";
import { authService } from "../services/authService";
import { success } from "zod/v4-mini";

const useAuthStore = create((set) => ({
    user: JSON.parse(localStorage.getItem("user") || null),
    token: localStorage.getItem("token") || null,
    loading: false,
    login: async (email, password) => {
        set({ loading: true })
        try {
            const data = await authService.login(email, password);
            console.log("dddsdsdsdsds", data)

            const token = data.token || data.accessToken;
            const user = data?.user || {
                email: data?.email,
                role: data?.role
            }

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user))

            set({ user, token, loading: false })
            return { success: true }
        } catch (err) {
            set({ loading: false });
            const message = err.response?.data?.message || err?.message || "Login Failed!";
            return { success: false, message }
        }
    },
    logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user")
        set({
            user: null,
            token: null
        })
    }
}));

export default useAuthStore;
