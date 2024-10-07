import TodoItem from "./TodoItem"

export default function TodoList({ tasks, onDelete }){
    return(
        <ul>
            {tasks.map((task, index) => (
                <TodoItem key={index} task={task} onDelete={onDelete} />
            ))}
        </ul>
    )
}