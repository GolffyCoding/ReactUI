import { X } from "lucide-react";
import { ChipProps } from "../types/interfaces";

export const Chip: React.FC<ChipProps> = ({
    label,
    onDeleted,
    color = 'gray',
    avatar
  }) => {
    return (
      <div className={`
        inline-flex items-center
        px-3 py-1 rounded-full
        bg-${color}-100 text-${color}-800
        text-sm
      `}>
        {avatar && (
          <span className="mr-2">
            {avatar}
          </span>
        )}
        {label}
        {onDeleted && (
          <button
            onClick={onDeleted}
            className={`
              ml-2 p-0.5 rounded-full
              hover:bg-${color}-200
              focus:outline-none
            `}
          >
            <X size={14} />
          </button>
        )}
      </div>
    );
  };