import { BoxDecoration } from "../styles/BoxDecoration";
import { ContainerProps } from "../types/interfaces";


export const Container: React.FC<ContainerProps> = ({ 
  children, 
  style, 
  padding, 
  margin, 
  alignment, 
  decoration, 
  className = '' 
}) => {
  const decorationStyle = decoration instanceof BoxDecoration ? decoration.toReactStyle() : {};
  
  return (
    <div 
      className={`
        ${padding ? `p-${padding}` : ''}
        ${margin ? `m-${margin}` : ''}
        ${alignment === 'center' ? 'mx-auto' : ''}
        ${className}
      `}
      style={{ ...style, ...decorationStyle }}
    >
      {children}
    </div>
  );
};