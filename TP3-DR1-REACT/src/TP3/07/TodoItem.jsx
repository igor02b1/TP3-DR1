import { useState } from "react"

export default function TodoItem(props){
    const [concluido, setConcluido] = useState(false)

    function tarefaConcluida(){
        setConcluido(true)
    }
    return (
        <li style={{backgroundColor: concluido ? "#00FF00" : "whitesmoke"}}>
            {props.task}
            <button onClick={tarefaConcluida}>Concluir</button>
        </li>
    )
}