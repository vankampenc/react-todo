import { useState } from "react"

const AddTodoForm = ({onAddTodo}) => {

    const [todoTitle, setTodoTitle] = useState("") 

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value
        setTodoTitle(newTodoTitle)
    }

    const handleAddTodo = (event) => {
        event.preventDefault()
        console.log(todoTitle)
        onAddTodo({title: todoTitle, id: Date.now()})
        setTodoTitle("")
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