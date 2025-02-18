import { Row } from "../layout/Row";
import { TextStyle } from "../styles/TextStyle";
import { AppBarProps } from "../types/interfaces";
import { Text } from "../widgets/Text";

export const AppBar: React.FC<AppBarProps> = ({ 
    title,
    leading,
    actions = [],
    elevation = 4
  }) => {
    const elevationClasses = {
      0: 'shadow-none',
      1: 'shadow-sm',
      2: 'shadow',
      3: 'shadow-md',
      4: 'shadow-lg'
    };
  
    return (
      <header className={`
        bg-blue-500 px-4 h-14
        text-white
        ${elevationClasses[elevation]}
        relative z-10
        flex items-center
      `}>
        <Row mainAxisAlignment="space-between" className="w-full">
          <Row spacing={4}>
            {leading}
            <Text 
              content={title}
              style={new TextStyle({ 
                fontSize: 20, 
                fontWeight: 'bold', 
                color: 'white' 
              })}
            />
          </Row>
          <Row spacing={2}>
            {actions}
          </Row>
        </Row>
      </header>
    );
  };