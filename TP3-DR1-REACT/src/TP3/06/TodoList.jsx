import TodoItem from "./TodoItem"

export default function TodoList(props){
    return(
        <ul>
            {props.task.map((item, index) => (
                <TodoItem key={index} task={item} />
            ))}
        </ul>
    )
}