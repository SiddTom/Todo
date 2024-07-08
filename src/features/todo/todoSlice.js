import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}],
    input: "",
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                state.input = todo.text;
            }
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
            
        },
        setInput: (state,action) =>{
                state.input = action.payload
            }
    }
})

export const {addTodo, removeTodo,updateTodo,setInput} = todoSlice.actions

export default todoSlice.reducer