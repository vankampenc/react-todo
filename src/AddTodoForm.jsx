import { useState } from "react"

const AddTodoForm = (props) => {

    const [todoTitle, setTodoTitle] = useState("") 

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value
        setTodoTitle(newTodoTitle)
    }

    const handleAddTodo = (event) => {
        event.preventDefault()
<<<<<<< HEAD
=======
        const todoTitle = event.target.title.value
        console.log(todoTitle)
>>>>>>> origin/main
        props.onAddTodo(todoTitle)
        event.target.reset()
    }

    return (
        <div>
            <form onSubmit={handleAddTodo} >
                <label htmlFor="todoTitle">Title</label>
                <input id="todoTitle" name="title" value={todoTitle} onChange={handleTitleChange} />
                <button>Add</button>
            </form>
        </div>
    )
}


export default AddTodoForm