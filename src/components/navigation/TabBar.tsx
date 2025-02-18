import { TabBarProps } from "../types/interfaces";

export const TabBar: React.FC<TabBarProps> = ({
    tabs,
    selectedIndex,
    onTap,
    color = 'blue'
  }) => {
    return (
      <div className="border-b border-gray-200">
        <div className="flex space-x-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => onTap(index)}
              className={`
                py-2 px-4 border-b-2
                ${selectedIndex === index 
                  ? `border-${color}-500 text-${color}-600`
                  : 'border-transparent text-gray-500 hover:text-gray-700'}
                focus:outline-none
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    );
  };