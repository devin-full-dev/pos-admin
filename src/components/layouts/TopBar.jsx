import React from "react";
import { Moon, Sun } from "lucide-react";
import StatCard from "../ui/StatCard";
import RecentProduct from '../ui/RecentProduct';
import { useTheme } from "../../context/ThemeContext";

const TopBar = () => {

    const { isDark, toggleDark } = useTheme();

    return (
        <header className="h-16 flex items-center justify-between px-6 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
            <h1>Dashboard</h1>
            <button onClick={toggleDark}>
                {isDark ?
                    <Sun size="18" className="text-amber-400" /> :
                    <Moon size="18" className="text-amber-600" />
                }

            </button>
        </header>

    )
}

export default TopBar;
