import { useEffect, useState } from 'react'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

function App() {
  const [todoList, setTodoList] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`
    const options = {
      method: 'GET', headers: { Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}}` }
    }
    try {
      const response = await fetch(url, options)
      if(!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
      const data = await response.json()
      console.log('data', data)

      const todos = data.records.map((todo) => {
        
        const newTodo =  {
          title: todo.title,
          id: todo.id
      }

      return newTodo
      })

      setTodos(todos)

    } catch (error) {
      
    }
  }
  // () => {
  //   new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const savedTodoList = localStorage.getItem('savedTodoList')
  //       const newTodoList = savedTodoList ? JSON.parse(savedTodoList) : []

  //       resolve({ data: { todoList: newTodoList } })
  //     }, "2000")
  //   })
  //     .then((result) => {
  //       setTodoList(result.data.todoList)
  //       setIsLoading(false)
  //     })
  // }, []

  useEffect(() => { fetchData() }, [])

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList))
    }
  }, [todoList])

  const removeTodo = (id) => {
    const itemList = todoList.filter((item) => {
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
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? <p>Loading List...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
    </>
  )
}

export default App
