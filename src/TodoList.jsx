import TodoListItem from "./TodoListItem"

let todoList = [
    {
        "id": "1",
        "title": "Finish React Assignment"
    },
    {
        "id": "2",
        "title": "Submit React Assignment"
    },
    {
        "id": "3",
        "title": "Finish Node Assignment"
    },
    {
        "id": "4",
        "title": "Submit Node Assignment"
    },
]

const TodoList = () => {
    return (
        <div>
            <ul>
                {todoList.map(
                    (todo) => <TodoListItem key={todo.id} todo={todo}/>
                )
                }
            </ul>
        </div>
    )
}

export default TodoList