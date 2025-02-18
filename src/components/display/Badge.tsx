import { BadgeProps } from "../types/interfaces";

export  const Badge: React.FC<BadgeProps> = ({
    child,
    content,
    color = 'red'
  }) => {
    return (
      <div className="relative inline-block">
        {child}
        <div className={`
          absolute -top-1 -right-1
          min-w-4 h-4
          flex items-center justify-center
          bg-${color}-500 text-white
          text-xs font-bold
          rounded-full px-1
        `}>
          {content}
        </div>
      </div>
    );
  };