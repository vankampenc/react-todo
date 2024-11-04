import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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



function App() {

  return (
    <>
      <h1>Todo List</h1>
      <div>
        <ul>
          {todoList.map(
            (todo) => <li key={todo.id}>{todo.title}</li>
          )
          }
        </ul>
      </div>
    </>
  )
}

export default App
