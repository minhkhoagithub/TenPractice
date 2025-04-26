import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (userInfo) => {
    setUser(userInfo);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const setUserInfo = (newUserInfo) => {
    setUser(newUserInfo);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
