import React, { createContext, useContext, useReducer } from "react";
import AppReducer from './AppReducer'

// initialState
const initialState = {
    transactions: []
}

// Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE TRANSACTION',
            payload: id
        })
     }
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)

}