import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar"
import Dashboard from "../../pages/DashBoard/DashboardPage";

const Layout = () => {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-slate-950">
            <Sidebar />
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
