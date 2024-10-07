import { useState } from "react"

export default function TodoItem( { task }){
    const [concluido, setConcluido] = useState(false)

    function tarefaConcluida(){
        setConcluido(true)
    }

    return (
        <li style={{ backgroundColor: concluido ? '#00FF00' : 'whitesmoke' }}>
          {task}
          <button onClick={tarefaConcluida}>Concluir</button>
        </li>
      );
}