import TodoList from "./TodoList"

export default function App() {
    const task = ["- maratonar uma série", "- estudar c#", "- criar um prototipo de jogo"]

    return (
        <div className="box-pai"> 
            <div className="box">
                <h1>Tarefas: </h1>
                <TodoList task={task} />
            </div>
        </div>
    )
}