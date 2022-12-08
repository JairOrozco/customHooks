// Hooks de React
import { useReducer, useEffect } from "react"

// Reducer que se usará
import { todoReducer } from "./TodoReducer"


const init = () => {
    return JSON.parse( localStorage.getItem('todoList') ) || [];
}


export const useTodo = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init )


    useEffect( () => {
        localStorage.setItem( 'todoList', JSON.stringify( todos ) )
    }, [ todos ] )
    

    const handleNewTodo = ( todo ) => {
        
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }

        dispatch( action )
    }
    
    const handleDeleteTodo = ( id ) => {

        dispatch( {
            type: '[TODO] Remove Todo',
            payload: id,
        } )
    }

    const handleToggleTodo = ( id ) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id,
        }

        dispatch( action )
    }

    return {
        todos,
        totalTodos: todos.length,
        pendingTodos: todos.filter( todo => todo.done === false).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
    
}
