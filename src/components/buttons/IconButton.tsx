import { IconButtonProps } from "../types/interfaces";

export const IconButton: React.FC<IconButtonProps> = ({ 
  icon, 
  onPressed,
  color = 'gray',
  size = 'md',
  disabled = false 
}) => {
  const sizeClasses = {
    sm: 'p-1',
    md: 'p-2',
    lg: 'p-3'
  };

  return (
    <button
      onClick={onPressed}
      disabled={disabled}
      className={`
        ${sizeClasses[size]}
        rounded-full
        text-${color}-500
        hover:bg-${color}-50
        active:bg-${color}-100
        focus:outline-none focus:ring-2 focus:ring-${color}-500 focus:ring-opacity-50
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-colors duration-200
      `}
    >
      {icon}
    </button>
  );
};