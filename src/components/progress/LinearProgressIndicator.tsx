import { LinearProgressProps } from "../types/interfaces";

export  const LinearProgressIndicator: React.FC<LinearProgressProps> = ({
    value,
    color = 'blue',
    height = 2
  }) => {
    return (
      <div className={`w-full bg-${color}-200 rounded-full overflow-hidden`} style={{ height }}>
        {value !== undefined ? (
          <div
            className={`bg-${color}-500 h-full transition-all duration-200`}
            style={{ width: `${value}%` }}
          />
        ) : (
          <div className={`bg-${color}-500 h-full animate-progress`} />
        )}
      </div>
    );
  };