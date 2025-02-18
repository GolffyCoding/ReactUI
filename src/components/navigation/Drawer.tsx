import { DrawerProps } from "../types/interfaces";

export  const Drawer: React.FC<DrawerProps> = ({ 
    child,
    header,
    isOpen,
    onClose
  }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex">
        <div 
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={onClose}
        />
        <div className="relative w-64 bg-white h-full shadow-lg">
          {header && (
            <div className="p-4 border-b">
              {header}
            </div>
          )}
          {child}
        </div>
      </div>
    );
  };