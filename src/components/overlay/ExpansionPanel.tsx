import { ExpansionPanelProps } from "../types/interfaces";

export  const ExpansionPanel: React.FC<ExpansionPanelProps> = ({
    title,
    children,
    isExpanded,
    onChanged
  }) => {
    return (
      <div className="border rounded-lg overflow-hidden">
        <button
          onClick={() => onChanged(!isExpanded)}
          className="w-full px-4 py-3 flex justify-between items-center bg-white hover:bg-gray-50 focus:outline-none"
        >
          {title}
          <svg
            className={`w-5 h-5 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isExpanded && (
          <div className="px-4 py-3 border-t">
            {children}
          </div>
        )}
      </div>
    );
  };