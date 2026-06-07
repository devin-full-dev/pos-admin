import React from "react";
import Modal from "./Modal";

export default function ConfirmModal({
    open,
    onClose,
    loading,
    onConfirm,
    confirmLabel = "Delete",
    title = "Are you sure?",
    message = "This action can not be undone!",
}) {

    return (
        <Modal open={open} onClose={onClose} title={title} size="sm">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                {message}
            </p>
            <div className="flex gap-3">
                <button onClick={onClose} className="btn-secondary flex-1">
                    Cancel
                </button>
                <button onClick={onConfirm} className="btn-danger flex-1">
                    {loading ? 'Deleting ...' : confirmLabel}
                </button>
            </div>
        </Modal>
    )
}
