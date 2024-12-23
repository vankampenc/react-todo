import { useRef, useEffect } from "react";

const InputWithLabel = (props) => {
    const {todoTitle, handleTitleChange, children} = props

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    return (
        <>
            <label htmlFor="todoTitle">{children}</label>
            <input id="todoTitle" name="title" value={todoTitle} onChange={handleTitleChange} ref={inputRef} />
        </>
    )
}


export default InputWithLabel