import { ButtonProps } from "../types/interfaces";

export const TextButton: React.FC<ButtonProps> = ({ 
  onPressed, 
  child, 
  color = 'blue',
  disabled = false
}) => {
  return (
    <button
      onClick={onPressed}
      disabled={disabled}
      className={`
        px-4 py-2 rounded-lg
        text-${color}-500
        hover:bg-${color}-50
        active:bg-${color}-100
        focus:outline-none focus:ring-2 focus:ring-${color}-500 focus:ring-opacity-50
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-colors duration-200
      `}
    >
      {child}
    </button>
  );
};