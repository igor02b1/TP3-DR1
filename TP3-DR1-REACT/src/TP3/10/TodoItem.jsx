import { useState } from "react"

export default function TodoItem( { task, onDelete }){
    const [concluido, setConcluido] = useState(false);
    const [deleteTask, setDeleteTask] = useState("");

    function tarefaConcluida(){
        setConcluido(true)
    }

    return (
        <li style={{ backgroundColor: concluido ? '#00FF00' : 'whitesmoke' }}>
          {task}
          <button onClick={tarefaConcluida}>Concluir</button>
          <button onClick={() => onDelete(task)}>Excluir</button>
        </li>
      );
}