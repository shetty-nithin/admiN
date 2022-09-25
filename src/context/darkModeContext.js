import { createContext, useReducer } from "react"
import DarkModeReducer from "./darkModeReducer";

const DEFAULT_STATE = {
    darkMode: false
}

export const DarkModeContext = createContext(DEFAULT_STATE);

export const DarkModeContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(DarkModeReducer, DEFAULT_STATE);

    return (
        <DarkModeContext.Provider value={{darkMode: state.darkMode, dispatch}}>
            {children}
        </DarkModeContext.Provider>
    )
}