import React from "react";

export default function FormFields({ label, required, error, children }) {
    return (
        <div>
            <label className="label">
                {label}
                {required && (<span className="text-red-500 ml-0.5">*</span>)}
            </label>
            {children}
            {error && (<p className="err">{error}</p>)}
        </div>
    )
}
