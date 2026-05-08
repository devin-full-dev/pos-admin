import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar"
import Dashboard from "../..//pages/Dashboard/DashboardPage";
import { useToggle } from "../../hooks/useToggle";
import LoginPage from "../../pages/auth/LoginPage";

import useAuthStore from "../../store/useAuthStore";

const Layout = () => {

    const { user, logout } = useAuthStore();
    const [toggle, value] = useToggle(false);

    if (!user) return <LoginPage />;

    return (
        <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-slate-950">
            <Sidebar
                collapsed={value}
                setCollapsed={toggle}
                logout={logout}
                user={user}
            />
            <div className="flex flex-col flex-1 overflow-hidden">
                <TopBar />
                <main className="flex-1 overflow-y-auto">
                    <Dashboard />
                </main>
            </div>
        </div>
    )
}

export default Layout;
