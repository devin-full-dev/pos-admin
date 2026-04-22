import React from "react";
import { MoveUp } from "lucide-react"
import RecentProduct from "./RecentProduct";

const StatCard = () => {
    return (
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="card p-5">
                <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wide mb-1">
                    Revenue
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    $300
                </p>
                <p className="flex text-xs text-green-500">
                    <MoveUp size={11} /> 12% vs last month
                </p>
            </div>

            <div className="card p-5">
                <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wide mb-1">
                    Order
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    $300
                </p>
                <p className="flex text-xs text-green-500">
                    <MoveUp size={11} /> 12% vs last month
                </p>
            </div>

            <div className="card p-5">
                <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wide mb-1">
                    Product
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    $300
                </p>
                <p className="flex text-xs text-green-500">
                    <MoveUp size={11} /> 12% vs last month
                </p>
            </div>

            <div className="card p-5">
                <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wide mb-1">
                    Low Stock
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    $300
                </p>
                <p className="flex text-xs text-green-500">
                    <MoveUp size={11} /> 12% vs last month
                </p>
            </div>
        </div>
    )
}

export default StatCard;
