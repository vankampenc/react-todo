const AddTodoForm = (props) => {

    const handleAddTodo = (event) => {
        const titleValue = event.target.title.value
        event.preventDefault()
        const todoTitle = titleValue
        props.onAddTodo(todoTitle)

    }

    return (
        <div>
            <form onSubmit={handleAddTodo} >
                <label htmlFor="todoTitle">Title</label>
                <input id="todoTitle" name="title" />
                <button>Add</button>
            </form>
        </div>
    )
}


export default AddTodoForm