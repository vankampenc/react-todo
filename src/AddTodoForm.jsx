const AddTodoForm = (props) => {

    const handleAddTodo = (event) => {
        event.preventDefault()
        const todoTitle = event.target.title.value
        console.log(todoTitle)
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