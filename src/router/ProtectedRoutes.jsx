import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

export default function ProtectedRoutes({ children }) {
    const { user, token } = useAuthStore();
    const location = useLocation();
    if (!user || !token) {
        return <Navigate to="/login" state={{ from: location }} />
    }

    return children
}
