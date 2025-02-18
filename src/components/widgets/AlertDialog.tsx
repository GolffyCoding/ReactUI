import { Row } from "../layout/Row";
import { TextStyle } from "../styles/TextStyle";
import { AlertDialogProps } from "../types/interfaces";
import { Text } from "./Text";

export const AlertDialog: React.FC<AlertDialogProps> = ({ 
    title, 
    content,
    actions = [],
    isOpen,
    onClose
  }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div 
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={onClose}
        />
        <div className="relative bg-white rounded-lg p-6 max-w-sm w-full mx-4">
          <div className="mb-4">
            <Text 
              content={title}
              style={new TextStyle({ fontSize: 18, fontWeight: 'bold', color: 'black' })}
            />
          </div>
          <div className="mb-6">
            {content}
          </div>
          <Row mainAxisAlignment="end" spacing={3}>
            {actions}
          </Row>
        </div>
      </div>
    );
  };