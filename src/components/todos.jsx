import React from 'react';
import { useSelector, useDispatch} from 'react-redux'; //TO FETCH value from state
import {removeTodo} from '../features/todo/todoslice'  //reducer for dispatch

function Todos(){

    const todos = useSelector(state => state.todos)
    console.log(todos)  
    
    const dispatch = useDispatch()

        return(
        <>
            <h1>todo</h1>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={() =>dispatch(removeTodo(todo.id))}>X</button>
                </li>
                //we just give reference can't give direct fn as it gets execute directly without clicking
            ))}
        
        </>
        
    )
}

export default Todos;