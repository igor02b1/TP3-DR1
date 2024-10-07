import TodoItem from "./TodoItem"

export default function TodoList({ tasks }){
    return(
        <ul>
            {tasks.map((task, index) => (
                <TodoItem key={index} task={task} />
            ))}
        </ul>
    )
}