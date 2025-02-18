import { DividerProps } from "../types/interfaces";

export   const Divider: React.FC<DividerProps> = ({ 
    height = 1,
    color = 'gray-200'
  }) => {
    return (
      <div className={`w-full bg-${color}`} style={{ height }} />
    );
  };