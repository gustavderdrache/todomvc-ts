import * as React from 'react';

interface TodoCountProps {
  count: number;
}

export default function TodoCount({ count }: TodoCountProps): JSX.Element {
  const itemOrItems = count === 1 ? 'item' : 'items';

  return (
    <span className="todo-count">
      <strong>{count}</strong> {itemOrItems} left
    </span>
  );
}