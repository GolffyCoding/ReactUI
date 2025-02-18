import React, { memo } from 'react';
import { Column, Container, Text, TextStyle } from '../components';

interface TodoListProps {
  items: React.ReactNode;
  isEmpty: boolean;
}

const emptyStyle = new TextStyle({
  fontSize: 16,
  color: '#6b7280',
  fontWeight: 'normal',
});

const TodoList = memo(({ items, isEmpty }: TodoListProps) => {
  if (isEmpty) {
    return (
      <Container padding={8} className="text-center">
        <Text
          content="No tasks yet. Add your first task above!"
          style={emptyStyle}
        />
      </Container>
    );
  }

  return (
    <Column spacing={2}>
      {items}
    </Column>
  );
});

export default TodoList;