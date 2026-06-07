import { useContext } from "react";
import { AuthContext  } from "../auth.context";
import {login, register, logout, getMe} from "../services/auth.api.js"
export const useAuth = () =>{
    const context = useContext(AuthContext)

    const {user, setUser, loading, setLoading} = context
    


    const handleLogin = async ({email,password}) =>{

       try {

         setLoading(true)
         const data = await login({email, password})
         if (data.success) {
           setUser(data.data.user);
         }
         return data
       } finally {
            setLoading(false);
       }
    }


    const handleRegister = async ({fullname, username, email, password}) =>{
      try {
        setLoading(true);
        const data = await register({fullname, username, email, password})
        // Registration typically doesn't log the user in immediately in this flow,
        // but if it does, we should set the user. 
        // Based on Register.jsx, it navigates to /login after registration.
        return data;
      } finally {
        setLoading(false);
      }
    }


    const handleLogout = async () =>{
      try {
        setLoading(true)
        await logout()
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    return {user, loading, handleLogout, handleRegister, handleLogin}
}