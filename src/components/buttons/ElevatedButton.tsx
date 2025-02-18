import { ButtonProps } from "../types/interfaces";

export const ElevatedButton: React.FC<ButtonProps> = ({ 
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
        bg-${color}-500 text-white
        hover:bg-${color}-600
        active:bg-${color}-700
        focus:outline-none focus:ring-2 focus:ring-${color}-500 focus:ring-opacity-50
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-colors duration-200
      `}
    >
      {child}
    </button>
  );
};