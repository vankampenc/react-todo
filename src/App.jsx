import { useEffect, useState } from 'react'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

const useSemiPersistentState = () => {
  
  const [todoList, setTodoList] = useState(() => {
    const savedTodoList = localStorage.getItem('savedTodoList')
    return savedTodoList ? JSON.parse(savedTodoList) : []
  })

  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList))
  }, [todoList] )  

  return [todoList, setTodoList]
}


function App() {
  const [todoList, setTodoList]  = useSemiPersistentState()

  const removeTodo = (id) => {
    const itemList = todoList.filter((item) => {
      console.log(item)
      console.log(item.id)
      console.log(id)
      return item.id !== id
    })
    setTodoList(itemList)
  }

  const addTodo = (newTodo) => {
    const newList = [...todoList, newTodo]
    setTodoList(newList)
  }


  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
    </>
  )
}

export default App
