import React, { useState } from "react";
import { LayoutDashboard, Package, ShoppingBag, ChevronLeft, LogOut, ChevronRight } from "lucide-react";

const Sidebar = ({ collapsed, setCollapsed }) => {

    return (
        <aside className={`${collapsed ? "w-16" : "w-60"} bg-slate-900 flex flex-col flex-shrink-0 translate-all duration-300`}>
            <div className={`flex items-center h-16 px-4 border-b border-slate-800  ${collapsed ? "justify-center" : "gap-3"}`}>
                <div className="w-11 h-11 rounded-lg bg-primary-600 flex items-center
                        justify-center text-white font-bold text-sm flex-shrink-0">
                    P
                </div>
                {!collapsed && (
                    <div>
                        <p className="text-white text-sm font-semibold leading-none">POS Admin</p>
                        <p className="text-slate-500 text-xs mt-0.5">Mini</p>
                    </div>
                )}
            </div>

            <nav className="flex-1 px-2 py-4 space-y-1">
                <button className="nav-item w-full bg-primary-600 text-white">
                    <LayoutDashboard />
                    {!collapsed && (<span>Dashboard</span>)}
                </button>
                <button className="nav-item w-full text-slate-400 hover:text-white hover:bg-slate-800">
                    <ShoppingBag />
                    {!collapsed && (<span>POS Screen</span>)}
                </button>
                <button className="nav-item w-full text-slate-400 hover:text-white hover:bg-slate-800">
                    <Package />
                    {!collapsed && (<span>Products</span>)}
                </button>
            </nav>
            <div className="px-2 py-4 border-t border-slate-800 space-y-1">
                <div className="flex items-center gap-3 px-3 py-2 mb-1">
                    <div className="w-7 h-7 rounded-full bg-primary-600 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                        A
                    </div>
                    <div className="min-w-0">
                        <p className="text-white text-xs font-medium truncate">Admin</p>
                        <p className="text-slate-500 text-xs truncate">ADMIN</p>
                    </div>
                </div>
                <button className="nav-item w-full text-slate-400 hover:text-red-400 hover:bg-red-900/20">
                    <LogOut size={16} />
                    {!collapsed && (<span>Logout</span>)}
                </button>
                <button onClick={() => setCollapsed(val => !val)} className="nav-item w-full text-slate-500 hover:text-white hover:bg-slate-800">
                    {collapsed ? (
                        <ChevronRight size={16} />
                    ) : (
                        <>
                            <ChevronLeft size={16} /> Collapse
                        </>
                    )}
                </button>
            </div>
        </aside >
    )
}

export default Sidebar;
