import { useEffect, useState } from "react";
import TodoList from "./TodoList/TodoList";
import AddTodoForm from "./AddTodoForm";
import PropTypes from "prop-types";

const TodoContainer = ({ tableName }) => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const baseUrl = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
  const getUrl = `${baseUrl}?view=Grid%20view&sort[0][field]=title&sort[0][direction]=asc`;

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };
    try {
      const response = await fetch(getUrl, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();

      const todos = data.records.map((todo) => {
        const newTodo = {
          title: todo.fields.title,
          id: todo.id,
        };
        return newTodo;
      });

      todos.sort((a, b) => {
        if (a.title < b.title) return 1;
        if (a.title > b.title) return -1;
        return 0;
      });

      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.error();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]);

  const removeTodo = async (id) => {
    const deleteURL = `${baseUrl}/${id}`;

    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(deleteURL, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();

      const newList = todoList.filter((todo) => todo.id !== data.id);
      setTodoList(newList);
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo = async (newTodo) => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        fields: { title: newTodo.title },
      }),
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(baseUrl, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      const newListItem = { title: data.fields.title, id: data.id };
      const newList = [...todoList, newListItem];
      setTodoList(newList);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>{tableName}</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p>Loading List...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
      <a href="/">Back to Home</a>
    </>
  );
};

TodoContainer.propTypes = {
  tableName: PropTypes.string,
};

export default TodoContainer;
