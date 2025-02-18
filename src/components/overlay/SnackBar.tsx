import { X } from "lucide-react";
import { SnackBarProps } from "../types/interfaces";

export const SnackBar: React.FC<SnackBarProps> = ({
    message,
    action,
    isVisible,
    onDismiss
  }) => {
    if (!isVisible) return null;
  
    return (
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-4 px-4 py-3 bg-gray-800 text-white rounded-lg shadow-lg">
          <span>{message}</span>
          {action && (
            <button
              onClick={action.onPressed}
              className="text-blue-400 hover:text-blue-300 focus:outline-none"
            >
              {action.label}
            </button>
          )}
          {onDismiss && (
            <button
              onClick={onDismiss}
              className="text-gray-400 hover:text-gray-300 focus:outline-none"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>
    );
  };