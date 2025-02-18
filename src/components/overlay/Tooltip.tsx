import { useState } from "react";
import { TooltipProps } from "../types/interfaces";

export const Tooltip: React.FC<TooltipProps> = ({
    message,
    children,
    position = 'top'
  }) => {
    const [isVisible, setIsVisible] = useState(false);
  
    const positionClasses = {
      top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
      bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
      left: 'right-full top-1/2 -translate-y-1/2 mr-2',
      right: 'left-full top-1/2 -translate-y-1/2 ml-2'
    };
  
    return (
      <div className="relative inline-block">
        <div
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          {children}
        </div>
        {isVisible && (
          <div className={`
            absolute z-50
            px-2 py-1
            bg-gray-800 text-white
            text-sm rounded
            whitespace-nowrap
            ${positionClasses[position]}
          `}>
            {message}
          </div>
        )}
      </div>
    );
  };