import { LayoutProps } from "../types/interfaces";

export const Row: React.FC<LayoutProps> = ({ 
  children, 
  mainAxisAlignment = 'start',
  crossAxisAlignment = 'center',
  spacing = 2,
  style,
  className = '' 
}) => {
  return (
    <div className={`
      flex flex-row
      ${mainAxisAlignment === 'center' ? 'justify-center' : 
        mainAxisAlignment === 'end' ? 'justify-end' : 
        mainAxisAlignment === 'space-between' ? 'justify-between' : 
        'justify-start'}
      ${crossAxisAlignment === 'center' ? 'items-center' : 
        crossAxisAlignment === 'start' ? 'items-start' : 
        crossAxisAlignment === 'end' ? 'items-end' : 
        'items-stretch'}
      gap-${spacing}
      ${className}
    `}
      style={style}
    >
      {children}
    </div>
  );
};