import React from "react";
import { ClockAlert } from "lucide-react"

const LowStock = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                    <ClockAlert size={16} /> Low Stock Alert
                </h2>
                <span className="badge-amber">2</span>
            </div>
            <div className="divide-y divide-gray-50 dark:divide-slate-800">
                <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-2">
                        <img
                            src="https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=200&q=80"
                            alt="Hot Chocolate"
                            className="w-8 h-8 object-cover rounded-lg"
                        />
                        <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                            Hot Chocolate
                        </p>
                    </div>
                    <span className="badge-amber">5 left</span>
                </div>
                <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-2">
                        <img
                            src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=200&q=80"
                            alt="Sandwich"
                            className="w-8 h-8 object-cover rounded-lg"
                        />
                        <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                            Sandwich
                        </p>
                    </div>
                    <span className="badge-amber">8 left</span>
                </div>
            </div>
        </div>
    )
}

export default LowStock;
