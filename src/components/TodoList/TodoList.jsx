import PropTypes from "prop-types"
import TodoListItem from "../TodoListItem/TodoListItem"
import style from "./TodoList.module.css"

const TodoList = ({ todoList, onRemoveTodo }) => {

    return (
        <ul className={style.TodoList}>
            {todoList.map(
                (todo) => <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
            )
            }
        </ul>
    )
}

TodoList.propTypes = {
    todoList: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          title: PropTypes.string,
        })
      ),
    onRemoveTodo: PropTypes.func,
}

export default TodoList