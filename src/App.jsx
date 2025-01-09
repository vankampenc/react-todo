import { useEffect, useState } from 'react'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  const [todoList, setTodoList] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`

  const fetchData = async () => {
    const options = {
      method: 'GET', headers: { Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}` }
    }
    try {
      const response = await fetch(url, options)
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
      const data = await response.json()

      const todos = data.records.map((todo) => {
        const newTodo = {
          title: todo.fields.title,
          id: todo.id
        }

        return newTodo
      })

      setTodoList(todos)
      setIsLoading(false)

    } catch (error) {
      console.log(error)
    }
  }

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

  const addTodo = async (newTodo) => {
    // const newList = [...todoList, newTodo] 
    // setTodoList(newList)
    const options = {
      method: 'POST',
      body: JSON.stringify(
        {
          fields: { 'title': newTodo.title }
        }),
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        'Content-Type': 'application/json',
      }
    }
    try {
      const response = await fetch(url, options)
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
      const data = await response.json()
      console.log(data)

      //create new list item data.fields.title
      const newListItem = { title: data.fields.title, id: data.id }
      //add item to current list with spread operators
      const newList = [...todoList, newListItem]
      //setTodoList
      setTodoList(newList)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <h1>Todo List</h1>
            <AddTodoForm onAddTodo={addTodo} />
            {isLoading ? <p>Loading List...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
          </>
        }>
        </Route>
        <Route path="/new" element={
          <h1>New Todo List</h1>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
