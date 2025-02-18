import { ScaffoldProps } from "../types/interfaces";

export  const Scaffold: React.FC<ScaffoldProps> = ({ 
    appBar, 
    body, 
    floatingActionButton,
    drawer
  }) => {
    return (
      <div className="h-screen flex flex-col relative bg-gray-50">
        {drawer && (
          <div className="fixed inset-y-0 left-0 z-20 w-64 bg-white shadow-lg">
            {drawer}
          </div>
        )}
        <div className={`flex-1 flex flex-col ${drawer ? 'ml-64' : ''}`}>
          {appBar}
          <div className="flex-1 w-full overflow-auto">
            {body}
          </div>
          {floatingActionButton && (
            <div className="fixed right-4 bottom-4 z-10">
              {floatingActionButton}
            </div>
          )}
        </div>
      </div>
    );
  };