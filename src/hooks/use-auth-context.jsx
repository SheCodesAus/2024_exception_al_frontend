import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const useAuthContext = () => {
  return useContext(AuthContext);
}

export const AuthContextProvider = ({children}) => {
  const [auth, setAuth] = useState(() => {
    const storedToken = window.localStorage.getItem("token") || null;
    const storedUser = JSON.parse(window.localStorage.getItem("user")) || null;
    return { user: storedUser, token: storedToken };
  });

  useEffect(() => {
    // Update the localStorage with the latest auth data whenever it changes
    window.localStorage.setItem("token", auth.token || "");
    window.localStorage.setItem("user", JSON.stringify(auth.user || null));
  }, [auth]);

  return (
    <AuthContext.Provider value= {{auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  )
}