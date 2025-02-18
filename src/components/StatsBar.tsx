import  { memo } from 'react';
import { Row, TextButton, Chip } from '.';

interface StatsBarProps {
  completed: number;
  total: number;
  onClear: () => void;
}

const StatsBar = memo(({ completed, total, onClear }: StatsBarProps) => (
  <Row mainAxisAlignment="space-between">
    <TextButton
      onPressed={onClear}
      child="Clear All"
      color="red"
      disabled={total === 0}
    />
    <Chip
      label={`${completed}/${total} completed`}
      color="blue"
    />
  </Row>
));

export default StatsBar;