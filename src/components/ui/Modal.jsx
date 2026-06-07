import { X } from "lucide-react";
import React, { useEffect } from "react";

export default function Modal({ open, onClose, title, children, size = 'md' }) {

    useEffect(() => {
        if (!open) return
        const handler = (e) => {
            if (e.key === 'Escape') onClose();
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [open, onClose]);

    if (!open) return null;

    const widths = { sm: 'max-w-sm', md: 'max-w-lg', lg: 'max-w-2xl', xl: 'max-w-3xl' }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-all">
            <div
                className="absolute inset-0 bg-black/40 dark:bg-black/50 backdrop:text-gray-200"
                onClick={null}
            />
            <div className={`relative w-full card shadow-xl ${widths[size]}`}>
                {title && (
                    <div className="card-header">
                        <h1 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                            {title}
                        </h1>
                        <button
                            onClick={onClose}
                            className="btn-ghost p-1.5 -mr-1 rounded-lg">
                            <X size={18} />
                        </button>
                    </div>
                )}
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    )
}
