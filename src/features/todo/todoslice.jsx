import {createSlice , nanoid} from '@reduxjs/toolkit';


// how store will look initialy -- use array or object 
const initialState = {
    todos: [{id:1 , text : "hello world"}]      //state name - todos
}

//slice is bigger/parent part of reducer 

export const todoSlice = createSlice({
    name: 'todo',                           //nameofslic - todod
    initialState,
    reducers: {                             //props and funtions
        //state- to access current values from state
        //actions - to perform manipulation and value fetching
        addTodo:(state, action) => {        
                const todo = {                  //you can do fetch API from database            
                    id: nanoid(),               
                    text: action.payload        //to fetch value - payload object
                }
                state.todos.push(todo)
            },                            
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => 
                todo.id !== action.payload)            //THIS WILL FILTER OUT BY REMOVING THE ACTION.PAYLOAD TODO        
            
        },
    }
})

//exporting all individual reducers to be used in diff components
export const {addTodo, removeTodo} = todoSlice.actions

//exporting all reduces to be used in specific store otherwise won't work
export default todoSlice.reducer

