import TodoList from "./TodoList"
import { useState } from "react"

export default function App() {
    const [tasks, setTasks] = useState([]);
    const [AddNewTask, setAddNewTask] = useState("");

    function AddTask(){
        setTasks([...tasks, AddNewTask]);
        setAddNewTask("");
    }

    function deleteTask(taskToDelete) {
        setTasks(tasks.filter(task => task !== taskToDelete));
    }

    return (    
        <div className="box-pai"> 
            <div className="box">
                <h1>Adicione Tarefas:</h1>
                <input 
                    type="text" 
                    value={AddNewTask} 
                    placeholder="Digite uma nova tarefa: "
                    onChange={(e) =>{
                        setAddNewTask(e.target.value)
                    }}
                />
                <button className="botao-adicionar" onClick={AddTask}>Adicionar</button>         
            </div>

            <div className="box">
                <h1>Tarefas: </h1>
                <TodoList tasks={tasks} onDelete={deleteTask} />
            </div>
        </div>
    )
}