import { SliderProps } from "../types/interfaces";

export const Slider: React.FC<SliderProps> = ({
    value,
    onChanged,
    min = 0,
    max = 100,
    step = 1,
    color = 'blue',
    disabled = false
  }) => {
    return (
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChanged(Number(e.target.value))}
        disabled={disabled}
        className={`
          w-full h-2
          bg-gray-200 rounded-full
          appearance-none cursor-pointer
          focus:outline-none
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
        style={{
          '--thumb-color': `var(--tw-colors-${color}-500)`,
          '--track-color': `var(--tw-colors-${color}-500)`
        } as React.CSSProperties}
      />
    );
  };