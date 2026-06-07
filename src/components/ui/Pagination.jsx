import React from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Pagination = ({ page, totalPages, onGoTo }) => {
    return (
        <div className="flex items-center justify-between px-2">
            <p className="text-sm text-gray-500 dark:text-slate-400 font-semibold">
                Page {page} of Total {totalPages}
            </p>
            <div className="flex gap-1">
                <button
                    onClick={() => onGoTo(page - 1)}
                    disabled={page === 1}
                    className="btn-ghost p-2 rounded-lg disabled:opacity-40"
                >
                    <ChevronLeft size={16} />
                </button>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const pnum = Math.max(1, Math.min(totalPages - 4, page - 2)) + i;
                    return (
                        <button
                            key={pnum}
                            onClick={() => onGoTo(pnum)}
                            className={`w-8 h-8 text-sm font-medium transition-all btn-ghost ${pnum === page ? 'bg-primary-600 text-white' : 'btn-ghost'}`}
                        >
                            {pnum}
                        </button>
                    )
                })}
                <button
                    onClick={() => onGoTo(page + 1)}
                    disabled={totalPages === page}
                    className="btn-ghost p-2 rounded-lg disabled:opacity-40"
                >
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>
    )
}

export default Pagination;
