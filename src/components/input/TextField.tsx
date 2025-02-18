import { TextFieldProps } from "../types/interfaces";

export const TextField: React.FC<TextFieldProps> = ({ 
  hint, 
  value, 
  onChanged,
  decoration,
  prefix,
  suffix,
  disabled = false
}) => {
  return (
    <div className="relative">
      {prefix && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          {prefix}
        </div>
      )}
      <input
        type="text"
        placeholder={hint}
        value={value}
        onChange={(e) => onChanged(e.target.value)}
        disabled={disabled}
        className={`
          w-full px-4 py-3 rounded-lg
          border border-gray-300
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          ${prefix ? 'pl-10' : ''}
          ${suffix ? 'pr-10' : ''}
          ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
        `}
        style={decoration}
      />
      {suffix && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          {suffix}
        </div>
      )}
    </div>
  );
};