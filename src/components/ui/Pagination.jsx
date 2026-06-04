import React from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Pagination = () => {
    return (
        <div className="flex items-center justify-between px-2">
            <p className="text-sm text-gray-500 dark:text-slate-400 font-semibold">
                Page 1 of Total Pages 3
            </p>
            <div className="flex gap-1">
                <button className="btn-ghost p-2 rounded-lg disabled:opacity-40">
                    <ChevronLeft size={16} />
                </button>
                <button className="w-8 h-8 text-sm font-medium transition-all btn-ghost">
                    1
                </button>
                <button className="btn-ghost p-2 rounded-lg disabled:opacity-40">
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>
    )
}

export default Pagination;
