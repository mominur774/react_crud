import React, {createContext, useReducer, useEffect} from "react";
import Reducer from './Reducer'

//initialState
const initialState = {
    users: localStorage.getItem('users') ? (
        JSON.parse(localStorage.getItem('users'))
    ) : (
        []
    )
}

//Create global context
export const GlobalContext = createContext(initialState);


//Create Provider
export const GlobalProvider = ({children}) =>{
    const[state, dispatch] = useReducer(Reducer, initialState)

    const addUser = (user) =>{
        dispatch({
            type: 'ADD_USER',
            payload: user
        })
    }
    const deleteUser = (id) =>{
        dispatch({
            type: 'DELETE_USER',
            payload: id
        })
    }
    const updateUser = (user) => {
        dispatch({
            type: 'UPDATE_USER',
            payload: user
        })
    }

    useEffect(()=>{
        localStorage.setItem('users', JSON.stringify(state.users))
    })

    return(
        <GlobalContext.Provider value={{
            users: state.users,
            addUser,
            deleteUser,
            updateUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}