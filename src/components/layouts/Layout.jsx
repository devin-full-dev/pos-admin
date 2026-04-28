import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar"
import Dashboard from "../..//pages/Dashboard/DashboardPage";
import { useToggle } from "../../hooks/useToggle";

const Layout = () => {

    const [toggle, value] = useToggle(false);

    return (
        <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-slate-950">
            <Sidebar collapsed={value} setCollapsed={toggle} />
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
