import TodoList from "./TodoList";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [addNewTask, setAddNewTask] = useState("");

  function AddTask() {
    if (addNewTask.trim() !== "") {
      setTasks([...tasks, addNewTask]);
      setAddNewTask("");
    }
  }

  function deleteTask(taskToDelete) {
    setTasks(tasks.filter(task => task !== taskToDelete)); 
  }

  function editTask(oldTask, newTask) {
    setTasks(tasks.map(task => (task === oldTask ? newTask : task))); 
  }

  return (
    <div className="box-pai"> 
      <div className="box-input box">
        <h1>Adicione Tarefas</h1>
        <input 
          type="text" 
          value={addNewTask} 
          placeholder="Digite uma nova tarefa: " 
          onChange={(e) => setAddNewTask(e.target.value)} 
        />
        <button className="botao-adicionar" onClick={AddTask}>Adicionar</button>         
      </div>

      <div className="box">
        <h1>Tarefas: </h1>
        <TodoList tasks={tasks} onDelete={deleteTask} onEdit={editTask} /> 
      </div>
    </div>
  );
}
