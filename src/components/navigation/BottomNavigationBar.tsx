import { BottomNavigationBarProps } from "../types/interfaces";

export const BottomNavigationBar: React.FC<BottomNavigationBarProps> = ({
    items,
    currentIndex,
    onTap,
    color = 'blue'
  }) => {
    return (
      <div className="flex justify-around items-center h-16 bg-white border-t border-gray-200">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => onTap(index)}
            className={`
              flex flex-col items-center
              px-4 py-2
              focus:outline-none
              ${currentIndex === index 
                ? `text-${color}-500`
                : 'text-gray-500'}
            `}
          >
            {item.icon}
            <span className="text-xs mt-1">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    );
  };