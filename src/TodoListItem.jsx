const TodoListItem = (props) => {
    const { todo } = props


     return (
        <div>
            <li>{todo.title}</li>
        </div>
     )    
}



export default TodoListItem