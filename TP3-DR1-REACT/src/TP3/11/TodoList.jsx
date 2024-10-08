import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, onDelete, onEdit }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          onDelete={onDelete} 
          onEdit={(newTask) => onEdit(task, newTask)} 
        />
      ))}
    </ul>
  );
}

export default TodoList;
