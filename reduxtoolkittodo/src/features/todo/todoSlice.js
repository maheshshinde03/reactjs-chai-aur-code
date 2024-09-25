import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  todos: [{id: 1, text: 'Hello World'}] 
};

// function sayHello() {
//     console.log('Hello World');
// }

export const todoSlice = createSlice({ 
    name: 'todos',
    initialState,
    reducers: {
        //give reference, don't call. here u can give reference and write function seperatelly or else directly declare here 

        //addTod : sayHello,   
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer