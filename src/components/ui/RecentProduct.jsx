import React from "react";
import LowStock from "./LowStock";

const RecentProduct = ({ img, productTitle, price }) => {
    return (

        <div className="flex flex-col items-center justify-center p-4 rounded-xl
                        bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-800">
            <img
                src={img}
                alt="Trail Mix"
                className="w-16 h-16 object-cover rounded-lg mb-2"
            />
            <p className="text-xs font-medium text-gray-700 dark:text-gray-300 truncate w-full text-center">
                {productTitle}
            </p>
            <p className="text-xs text-primary-600 dark:text-primary-400 font-semibold mt-0.5">
                {price}
            </p>
        </div>
    )
}

export default RecentProduct;
