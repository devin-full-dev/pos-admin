import React from "react";
import { MoveUp } from "lucide-react"
import RecentProduct from "./RecentProduct";

const StatCard = ({ label, value, statValue }) => {
    return (
        <div className="card p-5">
            <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wide mb-1">
                {label}
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {`$${value}`}
            </p>
            <p className="flex text-xs text-green-500">
                <MoveUp size={11} /> {`${statValue}% vs last month`}
            </p>
        </div>
    )
}

export default StatCard;
