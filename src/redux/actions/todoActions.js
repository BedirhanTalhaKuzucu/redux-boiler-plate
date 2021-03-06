import { ADD_TODO, CLEAR_TODO_LIST, DELETE_TODO, TOGGLE_TODO } from "../types/todoTypes"

export const addtodo = (payload) =>{
    return {
        type: ADD_TODO,
        payload:payload
    }
}

export const delete_todo = (payload) =>{
    return {
        type: DELETE_TODO,
        payload: payload
    }
}

export const clearTodoList = () =>{
    return {
        type: CLEAR_TODO_LIST
    }
}

export const toogle_todo = (payload) =>{
    return {
        type: TOGGLE_TODO,
        payload: payload
    }
}