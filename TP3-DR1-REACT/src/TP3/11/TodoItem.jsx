import React, { useState } from 'react';

function TodoItem({ task, onDelete, onEdit }) {
  const [concluido, setConcluido] = useState(false);
  const [isEditing, setIsEditing] = useState(false); 
  const [editValue, setEditValue] = useState(task); 

  function tarefaConcluida() {
    setConcluido(true);
  }

  function handleEdit() {
    if (isEditing) {
      onEdit(editValue); 
    }
    setIsEditing(!isEditing); 
  }

  return (
    <li style={{ backgroundColor: concluido ? '#00FF00' : 'whitesmoke' }}>
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)} 
        />
      ) : (
        <span>{task}</span> 
      )}
      <button onClick={tarefaConcluida}>Concluir</button>
      <button onClick={() => onDelete(task)}>Excluir</button>
      <button onClick={handleEdit}>{isEditing ? 'Salvar' : 'Editar'}</button>
    </li>
  );
}

export default TodoItem;
