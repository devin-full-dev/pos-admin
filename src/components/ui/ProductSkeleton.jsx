import React from "react";

function ProductSkeleton() {
    return (
        <div className="card p-4 animate-pulse">
            <div className="mx-auto w-20 h-20 rounded-xl mb-3 bg-gray-200 dark:bg-slate-700"></div>
            <div className="h-3 rounded bg-gray-200 dark:bg-slate-700 mb-2 w-2/3"></div>
            <div className="h4- rounded border-gray-200 dark:bg-gray-700 w-1/2"></div>
        </div>
    );
}

export default ProductSkeleton;
