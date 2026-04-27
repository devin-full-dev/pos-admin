import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar"
import Dashboard from "../..//pages/Dashboard/DashboardPage";

const Layout = () => {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-slate-950">
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            <div className="flex flex-col flex-1 overflow-hidden">
                <TopBar />
                <main className="flex-1 overflow-y-auto">
                    <Dashboard collapsed={collapsed} />
                </main>
            </div>
        </div>
    )
}

export default Layout;
