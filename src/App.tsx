/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useMemo, useCallback, memo, Suspense, lazy } from 'react';
import {
  Scaffold,
  AppBar,
  Container,
  Column,
  Row,
  Text,
  TextField,
  IconButton,
  Checkbox,
  Divider,
  TextStyle,
  Chip,
  LinearProgressIndicator
} from './components';
import { Plus, Trash2, Check } from 'lucide-react';

// Types
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Constants
const STYLES = {
  text: {
    todo: new TextStyle({
      fontSize: 16,
      color: '#1f2937',
      fontWeight: 'normal',
    }),
    completed: new TextStyle({
      fontSize: 16,
      color: '#9ca3af',
      fontWeight: 'normal',
    })
  }
} as const;

// Lazy loaded components
const TodoList = lazy(() => import('./components/TodoList'));
const StatsBar = lazy(() => import('./components/StatsBar'));

// Optimized AddTodo component
const AddTodo = memo(({ onAdd }: { onAdd: (text: string) => void }) => {
  const [text, setText] = useState('');
  
  const handleAdd = useCallback(() => {
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  }, [text, onAdd]);

  return (
    <Row spacing={3}>
      <div className="flex-1">
        <TextField
          hint="Add a new task..."
          value={text}
          onChanged={setText}
        />
      </div>
      <IconButton
        icon={<Plus size={24} />}
        onPressed={handleAdd}
        color="blue"
      />
    </Row>
  );
});

// Optimized TodoItem component with minimal props
const TodoItem = memo(({ 
  text, 
  completed, 
  onToggle, 
  onDelete 
}: { 
  text: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}) => (
  <Container className="hover:bg-gray-50" padding={4}>
    <Row mainAxisAlignment="space-between" crossAxisAlignment="center">
      <Row spacing={3} crossAxisAlignment="center">
        <Checkbox
          value={completed}
          onChanged={onToggle}
          color="blue"
        />
        <Text
          content={text}
          style={completed ? STYLES.text.completed : STYLES.text.todo}
        />
      </Row>
      <Row spacing={2}>
        {completed && (
          <Chip
            label="Done"
            color="green"
            avatar={<Check size={12} />}
          />
        )}
        <IconButton
          icon={<Trash2 size={18} />}
          onPressed={onDelete}
          color="red"
          size="sm"
        />
      </Row>
    </Row>
  </Container>
));

// Loading fallback
const LoadingFallback = () => (
  <Container padding={4}>
    <LinearProgressIndicator color="blue" />
  </Container>
);

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  // Memoized stats calculation
  const stats = useMemo(() => ({
    total: todos.length,
    completed: todos.filter(t => t.completed).length
  }), [todos]);

  // Optimized event handlers
  const handleAddTodo = useCallback((text: string) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos(prev => {
      const updated = [...prev, newTodo];
      localStorage.setItem('todos', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const handleToggleTodo = useCallback((id: number) => {
    setTodos(prev => {
      const updated = prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem('todos', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const handleDeleteTodo = useCallback((id: number) => {
    setTodos(prev => {
      const updated = prev.filter(todo => todo.id !== id);
      localStorage.setItem('todos', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const handleClearAll = useCallback(() => {
    setTodos([]);
    localStorage.removeItem('todos');
  }, []);

  // Memoized todo items to prevent unnecessary re-renders
  const todoItems = useMemo(() => 
    todos.map(todo => (
      <React.Fragment key={todo.id}>
        <TodoItem
          text={todo.text}
          completed={todo.completed}
          onToggle={() => handleToggleTodo(todo.id)}
          onDelete={() => handleDeleteTodo(todo.id)}
        />
        <Divider />
      </React.Fragment>
    )),
    [todos, handleToggleTodo, handleDeleteTodo]
  );

  return (
    <Scaffold
      appBar={
        <AppBar
          title="Todo App"
          elevation={0}
        />
      }
      body={
        <Container padding={4} className="max-w-3xl mx-auto">
          <Column spacing={4}>
            <AddTodo onAdd={handleAddTodo} />
            
            <Suspense fallback={<LoadingFallback />}>
              <StatsBar
                completed={stats.completed}
                total={stats.total}
                onClear={handleClearAll}
              />
              
              <Divider />

              {todos.length > 0 ? (
                <Column spacing={2}>
                  {todoItems}
                </Column>
              ) : (
                <Container padding={8} className="text-center">
                  <Text
                    content="No tasks yet. Add your first task above!"
                    style={STYLES.text.todo}
                  />
                </Container>
              )}
            </Suspense>
          </Column>
        </Container>
      }
    />
  );
}

export default App;