import { BoxDecoration } from "../styles/BoxDecoration";
import { CardProps } from "../types/interfaces";

export const Card: React.FC<CardProps> = ({ 
  child, 
  elevation = 1,
  decoration,
  onTap
}) => {
  const elevationClasses = {
    0: 'shadow-none',
    1: 'shadow-sm',
    2: 'shadow',
    3: 'shadow-md',
    4: 'shadow-lg'
  };

  const decorationStyle = decoration instanceof BoxDecoration ? decoration.toReactStyle() : {};

  return (
    <div
      onClick={onTap}
      className={`
        rounded-lg
        ${elevationClasses[elevation]}
        ${onTap ? 'cursor-pointer hover:shadow-md transition-shadow duration-200' : ''}
      `}
      style={decorationStyle}
    >
      {child}
    </div>
  );
};