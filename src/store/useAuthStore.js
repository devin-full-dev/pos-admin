import { create } from "zustand";

const useAuthStore = create((set) => ({
    user: null,
    login: (username, password) => {
        if (username === "darakeo" && password === "12345") {
            set({
                user: { username, role: "Administrator" }
            })
            return { success: true }
        }
        return { success: false }
    },
    logout: () => set({
        user: null
    })
}));

export default useAuthStore;
