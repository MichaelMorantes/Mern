import { createContext, useState, useContext } from "react";
import { registerRequest } from "../api/auth";

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAutenticated] = useState(false);
    const [errors, setErrors] = useState([])

    const signup = async (user) => {
       try {
            const res = await registerRequest(user);
            setUser(res.data);
            setIsAutenticated(true);
       } catch (error) {
            // console.log(error.response)
            setErrors(error.response.data);
       }
    }

    return (
        <AuthContext.Provider 
            value={{ 
                signup, 
                user,
                isAuthenticated,
                errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}