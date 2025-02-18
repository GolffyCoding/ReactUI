import { ProgressIndicatorProps } from "../types/interfaces";

export  const CircularProgressIndicator: React.FC<ProgressIndicatorProps> = ({ 
    value,
    color = 'blue',
    size = 'md'
  }) => {
    const sizeClasses = {
      sm: 'w-4 h-4',
      md: 'w-8 h-8',
      lg: 'w-12 h-12'
    };
  
    return (
      <div className={`${sizeClasses[size]} relative`}>
        <div className={`
          absolute inset-0
          border-2 border-${color}-200
          rounded-full
        `} />
        {value !== undefined && (
          <div
            className={`
              absolute inset-0
              border-2 border-${color}-500
              rounded-full
              transition-all duration-200
            `}
            style={{
              clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 ${value}%)`
            }}
          />
        )}
      </div>
    );
  };
  