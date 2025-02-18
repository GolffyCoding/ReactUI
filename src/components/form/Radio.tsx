import { RadioProps } from "../types/interfaces";

export const Radio: React.FC<RadioProps> = ({
    value,
    groupValue,
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
          type="radio"
          checked={value === groupValue}
          onChange={() => !disabled && onChanged(value)}
          disabled={disabled}
          className={`
            form-radio h-4 w-4
            text-${color}-500
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