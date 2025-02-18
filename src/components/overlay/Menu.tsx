import { MenuProps } from "../types/interfaces";

export const Menu: React.FC<MenuProps> = ({
    items,
    isOpen,
    onClose,
    anchorEl
  }) => {
    if (!isOpen || !anchorEl) return null;
  
    const rect = anchorEl.getBoundingClientRect();
  
    return (
      <>
        <div
          className="fixed inset-0 z-40"
          onClick={onClose}
        />
        <div
          className="absolute z-50 mt-2 bg-white rounded-lg shadow-lg py-1 min-w-[160px]"
          style={{
            top: rect.bottom,
            left: rect.left
          }}
        >
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                item.onPressed();
                onClose();
              }}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none"
            >
              {item.label}
            </button>
          ))}
        </div>
      </>
    );
  };