import React, { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem("userData"));

  const [isLoginContainerOpen,setIsLoginContainerOpen] = useState(false);

  const openLoginContainer =()=>{
    setIsLoginContainerOpen(true);
  }
  const closeLoginContainer=()=>{
    setIsLoginContainerOpen(false);
  }
  const login = (userData) => {
    setIsLoggedIn(true);
    const userSessionData = {
      token: userData.token,
      data: userData.data,
    };
    sessionStorage.setItem("userData", JSON.stringify(userSessionData));
    sessionStorage.setItem("userToken",userData.token);
    setIsLoginContainerOpen(false);
  };

  const logOut = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("userData");
    sessionStorage.removeItem("joinedChannels")
    sessionStorage.removeItem("userToken")
  };

  const authNavigator = ()=>{
    if(!isLoggedIn){
      openLoginContainer();
      return false;
    }else{
      return true
    }
  }
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logOut,openLoginContainer,closeLoginContainer,isLoginContainerOpen,authNavigator}}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
export default AuthProvider;
