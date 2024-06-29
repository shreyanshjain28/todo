import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoslice'  //reducer


function AddTodo(){

    const [input, setInput] = useState('')
    const dispatch = useDispatch()


    const addTodoHandler = (e) =>{
        e.preventDefault()
        dispatch(addTodo(input))                 //send value to reducer
        setInput('')
    } 

     
        return(
        <form onSubmit={addTodoHandler}>

            <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter a new todo"
                />
                <button type="submit">Add Todo</button>
        </form>
    )
}

export default AddTodo;