import { SwitchProps } from "../types/interfaces";

export  const Switch: React.FC<SwitchProps> = ({
    value,
    onChanged,
    activeColor = 'blue',
    disabled = false
  }) => {
    return (
      <button
        onClick={() => !disabled && onChanged(!value)}
        className={`
          relative inline-flex items-center
          h-6 w-11 rounded-full
          transition-colors duration-200
          focus:outline-none
          ${value ? `bg-${activeColor}-500` : 'bg-gray-200'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        <span
          className={`
            inline-block w-4 h-4
            transform transition-transform duration-200
            bg-white rounded-full
            ${value ? 'translate-x-6' : 'translate-x-1'}
          `}
        />
      </button>
    );
  };