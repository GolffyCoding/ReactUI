import React from "react";
import { TabViewProps } from "../types/interfaces";

export  const TabView: React.FC<TabViewProps> = ({
    children,
    selectedIndex
  }) => {
    const childrenArray = React.Children.toArray(children);
    return childrenArray[selectedIndex] || null;
  };
  