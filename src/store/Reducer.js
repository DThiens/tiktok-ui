
import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO } from "./constants"
const initState = {
    todos: [],
    todoInput: '',
}

function reducer (state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO: 

            const newTodo = [...state.todos]
            newTodo.splice(action.payload, 1)
            return {
                ...state,
                todos: newTodo
            }
        default: 
            throw new Error('Invalid action...')
    }
}
export {initState}
export default reducer