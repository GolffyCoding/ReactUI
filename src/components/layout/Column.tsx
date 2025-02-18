import React from "react";
import { LayoutProps } from "../types/interfaces";

export const Column: React.FC<LayoutProps> = ({ 
  children, 
  mainAxisAlignment = 'start', 
  crossAxisAlignment = 'stretch',
  spacing = 2
}) => {
  return (
    <div className={`
      flex flex-col
      ${mainAxisAlignment === 'center' ? 'justify-center' : 
        mainAxisAlignment === 'end' ? 'justify-end' : 
        mainAxisAlignment === 'space-between' ? 'justify-between' : 
        'justify-start'}
      ${crossAxisAlignment === 'center' ? 'items-center' : 
        crossAxisAlignment === 'start' ? 'items-start' : 
        crossAxisAlignment === 'end' ? 'items-end' : 
        'items-stretch'}
      gap-${spacing}
      w-full
    `}>
      {children}
    </div>
  );
};