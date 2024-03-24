import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const useAuthContext = () => {
  return useContext(AuthContext);
}

export const AuthContextProvider = ({children}) => {
  const [auth, setAuth] = useState(() => {
    const storedUser = window.localStorage.getItem("user");
    const storedToken = window.localStorage.getItem("token");
    return {storedUser, storedToken}
  })

  return (
    <AuthContext.Provider value= {{auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  )
}