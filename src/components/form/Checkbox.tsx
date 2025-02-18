import { CheckboxProps } from "../types/interfaces";

export  const Checkbox: React.FC<CheckboxProps> = ({
    value,
    onChanged,
    label,
    color = 'blue',
    disabled = false
  }) => {
    return (
      <label className={`
        inline-flex items-center
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}>
        <input
          type="checkbox"
          checked={value}
          onChange={() => !disabled && onChanged(!value)}
          disabled={disabled}
          className={`
            form-checkbox h-4 w-4
            text-${color}-500
            rounded
            focus:ring-${color}-500
            border-gray-300
          `}
        />
        {label && (
          <span className="ml-2">
            {label}
          </span>
        )}
      </label>
    );
  };