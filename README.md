# React Todo Application
![Screenshot 2025-02-22 202758](https://github.com/user-attachments/assets/daaa125c-7888-430d-8fa9-db77d772f6ab)

A modern, performant Todo application built with React and TypeScript, featuring a clean UI and optimized component architecture.

## Features

- Create, complete, and delete tasks
- Persistent storage using localStorage
- Real-time statistics tracking
- Optimized performance with React.memo and useMemo
- Responsive design with Tailwind CSS
- Lazy-loaded components for better initial load time
- Clean and intuitive user interface
- Accessibility-friendly components

## Technical Architecture

### Core Components

- **App**: Main application container handling state management and persistence
- **AddTodo**: Optimized input component for adding new tasks
- **TodoItem**: Memoized component for rendering individual todo items
- **TodoList**: Lazy-loaded component for displaying todos
- **StatsBar**: Lazy-loaded component showing task statistics

### State Management

The application uses React's built-in state management with the following optimizations:

- Local storage persistence for todos
- Memoized calculations for statistics
- Optimized event handlers using useCallback
- Efficient re-rendering with React.memo

### UI Components

The application uses a custom UI component library featuring:

- Scaffold: Main layout component
- AppBar: Top navigation bar
- Container: Flexible container component
- Row/Column: Flex-based layout components
- Text: Typography component with consistent styling
- Various input and interactive components


## Performance Optimizations

1. **Component Memoization**
   - TodoItem uses React.memo to prevent unnecessary re-renders
   - AddTodo is memoized for stable rendering
   - Event handlers are wrapped with useCallback

2. **Code Splitting**
   - TodoList and StatsBar are lazy-loaded
   - Components use Suspense for smooth loading states

3. **State Management**
   - Efficient updates using immutable state patterns
   - Memoized calculations for derived state
   - Batched localStorage updates

## Styling

The application uses Tailwind CSS for styling with:

- Responsive design patterns
- Custom color schemes
- Consistent spacing using utility classes
- Hover and active states
- Smooth transitions

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Browser Support

The application supports all modern browsers including:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)





## Acknowledgments

- Tailwind CSS for utility-first styling
- React team for hooks and performance optimizations
- Lucide React for icons
