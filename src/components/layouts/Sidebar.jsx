import React, { useState } from "react";
import { LayoutDashboard, Package, ShoppingBag, ChevronLeft, LogOut, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

import useAuthStore from "../../store/useAuthStore";

const NAV_ITEMS = [
    { id: 1, label: 'Dashboard', path: '/', icon: LayoutDashboard },
    { id: 2, label: 'POS Screen', path: '/pos', icon: ShoppingBag },
    { id: 3, label: 'Products', path: '/products', icon: Package }
]

const Sidebar = ({ collapsed, setCollapsed }) => {

    const { user, logout } = useAuthStore();

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
                {NAV_ITEMS.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <NavLink
                            key={item.id}
                            to={item.path}
                            end={item.path === '/'}
                            className={(nav) => `nav-item w-full text-white transition-colors
                                ${collapsed ? "justify-center px-0" : ""}
                                ${nav.isActive ? "bg-primary-600 text-white" : "text-slate-400 hover:text-white hover:bg-slate-800"}
                                `}
                        >
                            <Icon />
                            {!collapsed && (<span>{item.label}</span>)}
                        </NavLink>
                    )
                })}
            </nav>
            <div className="px-2 py-4 border-t border-slate-800 space-y-1">
                <div className="flex items-center gap-3 px-3 py-2 mb-1">
                    <div className="w-7 h-7 rounded-full bg-primary-600 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                        A
                    </div>
                    <div className="min-w-0">
                        <p className="text-white text-xs font-medium truncate">{user?.email}</p>
                        <p className="text-slate-500 text-xs truncate">{user?.role}</p>
                    </div>
                </div>
                <button
                    className="nav-item w-full text-slate-400 hover:text-red-400 hover:bg-red-900/20"
                    onClick={logout}
                >
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
