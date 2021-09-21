import { useState, createContext, useContext } from 'react';

const LogInContext = createContext()

export const useLogInContext = () => useContext(LogInContext)

export const LogInContextProvider = ({children}) => {
    const [logIn, setLogIn] = useState([])
    console.log(logIn)
    return (
        <LogInContext.Provider value={{logIn}}>
            {children}
        </LogInContext.Provider>
    )
}