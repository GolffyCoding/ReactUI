import React from "react";
import { ListViewProps } from "../types/interfaces";

export const ListView: React.FC<ListViewProps> = ({ children, padding = 4, divider }) => {
  const childrenArray = React.Children.toArray(children);
  
  return (
    <div className={`flex flex-col p-${padding}`}>
      {childrenArray.map((child, index) => (
        <React.Fragment key={index}>
          {child}
          {divider && index < childrenArray.length - 1 && divider}
        </React.Fragment>
      ))}
    </div>
  );
};