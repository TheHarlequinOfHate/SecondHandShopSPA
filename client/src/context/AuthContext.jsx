import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext({
    userID: '',
    email: '',
    accessToken: '',
    isAuthenticate: false,
    changeAuthState: (authState = {}) => null,
});

export function AuthContextProvider (props) {
    const [authState, setAuthState] = useState({});


    const changeAuthState = (state) => {
        setAuthState(state)
      }
    
    
      const contextData = {
        username: authState.username,
        userID: authState._id,
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeAuthState,
      }

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}            
        </AuthContext.Provider>
    )
}