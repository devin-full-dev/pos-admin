import React from "react";
import LowStock from "./LowStock";

const RecentProduct = () => {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 card">
                <div className="card-header">
                    <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                        Recent Products
                    </h2>
                </div>
                <div className="p-4 grid grid-cols-2 sm:grid-cols-3 gap-3">

                    <div className="flex flex-col items-center justify-center p-4 rounded-xl
                        bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-800">
                        <img
                            src="https://images.unsplash.com/photo-1590301157890-4810ed352733?w=200&q=80"
                            alt="Trail Mix"
                            className="w-16 h-16 object-cover rounded-lg mb-2"
                        />
                        <p className="text-xs font-medium text-gray-700 dark:text-gray-300 truncate w-full text-center">
                            Trail Mix
                        </p>
                        <p className="text-xs text-primary-600 dark:text-primary-400 font-semibold mt-0.5">
                            $3.50
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center p-4 rounded-xl
                        bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-800">
                        <img
                            src="https://images.unsplash.com/photo-1622484212850-eb596d769edc?w=200&q=80"
                            alt="Protein Bar"
                            className="w-16 h-16 object-cover rounded-lg mb-2"
                        />
                        <p className="text-xs font-medium text-gray-700 dark:text-gray-300 truncate w-full text-center">
                            Protein Bar
                        </p>
                        <p className="text-xs text-primary-600 dark:text-primary-400 font-semibold mt-0.5">
                            $4.50
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center p-4 rounded-xl
                        bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-800">
                        <img
                            src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=200&q=80"
                            alt="Iced Tea"
                            className="w-16 h-16 object-cover rounded-lg mb-2"
                        />
                        <p className="text-xs font-medium text-gray-700 dark:text-gray-300 truncate w-full text-center">
                            Iced Tea
                        </p>
                        <p className="text-xs text-primary-600 dark:text-primary-400 font-semibold mt-0.5">
                            $3.00
                        </p>
                    </div>

                </div>
            </div>
            <LowStock />
        </div>
    )
}

export default RecentProduct;
