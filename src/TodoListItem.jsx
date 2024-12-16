const TodoListItem = ({todo, onRemoveTodo}) => {

     const removeTodo = () => onRemoveTodo(todo.id)


     return (
            <li>{todo.title}
               <button onClick={removeTodo}>Remove</button>
            </li>
     )    
}



export default TodoListItem