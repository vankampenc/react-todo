import { useState } from "react"

const AddTodoForm = (props) => {

    const [todoTitle, setTodoTitle] = useState("") 

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value
        setTodoTitle(newTodoTitle)
    }

    const handleAddTodo = (event) => {
        const titleValue = event.target.title.value
        event.preventDefault()
        props.onAddTodo(todoTitle)

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