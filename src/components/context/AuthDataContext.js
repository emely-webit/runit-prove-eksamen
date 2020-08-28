import React, { createContext, useState } from "react";

export const AuthDataContext = createContext();

const AuthDataProvider = (props) => {
  console.log("AuthDataProvider her");

  const [loggedIn, setLoggendIn] = useState();

  const onLogout = () => {
    console.log("AUTHDATACONTEXT onLogout");
    setLoggendIn(false);
  };
  const onLogin = (logindata) => {
    console.log("AUTHDATACONTEXT onLogin", logindata);
    setLoggendIn(true);
  };

  return (
    <AuthDataContext.Provider value={{ loggedIn, onLogin, onLogout }}>
      {props.children}
    </AuthDataContext.Provider>
  );
};

export default AuthDataProvider;
