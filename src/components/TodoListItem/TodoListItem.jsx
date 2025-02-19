import PropTypes from "prop-types";
import style from "./TodoListItem.module.css";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  const removeTodo = () => onRemoveTodo(todo.id);

  return (
    <li className={style.TodoListItem}>
      {todo.title}
      <button onClick={removeTodo}>Remove</button>
    </li>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
  }),
  onRemoveTodo: PropTypes.func,
};

export default TodoListItem;
