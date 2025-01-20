import style from "./TodoListItem.module.css"

const TodoListItem = ({todo, onRemoveTodo}) => {

     const removeTodo = () => onRemoveTodo(todo.id)


     return (
            <li className={style.TodoListItem}>{todo.title}
               <button onClick={removeTodo}>Remove</button>
            </li>
     )    
}



export default TodoListItem