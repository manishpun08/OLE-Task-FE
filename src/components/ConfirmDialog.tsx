"use client";

import { AlertTriangle, X } from "lucide-react";

interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  type?: "warning" | "danger" | "info";
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  type = "warning",
}) => {
  if (!isOpen) return null;

  const getTypeStyles = () => {
    switch (type) {
      case "danger":
        return {
          icon: "text-red-600",
          iconBg: "bg-red-100",
          confirmBtn: "bg-red-600 hover:bg-red-700 focus:ring-red-500",
        };
      case "info":
        return {
          icon: "text-blue-600",
          iconBg: "bg-blue-100",
          confirmBtn: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
        };
      default:
        return {
          icon: "text-yellow-600",
          iconBg: "bg-yellow-100",
          confirmBtn: "bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500",
        };
    }
  };

  const styles = getTypeStyles();

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${styles.iconBg}`}
            >
              <AlertTriangle className={`h-6 w-6 ${styles.icon}`} />
            </div>
            <h3
              id="dialog-title"
              className="text-lg font-semibold text-gray-900"
            >
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-600">{message}</p>
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            {cancelText}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className={`px-4 py-2 text-sm font-medium text-white rounded-md transition-colors focus:outline-none focus:ring-2 ${styles.confirmBtn}`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
