import { ReactNode } from "react";

export const Center: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex justify-center items-center">
      {children}
    </div>
  );
};