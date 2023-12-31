import jwt from "jsonwebtoken";
import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [localSession, setLocalSession] = useState();

  useEffect(() => {
    const localSessionToken = localStorage.getItem("session");
    const decodedToken = jwt.decode(localSessionToken);
    const localSessionUser = decodedToken?._doc;

    if (localSessionToken !== null) {
      setLocalSession(localSessionUser);
    }
  }, []);

  return (
    <LoginContext.Provider value={{ localSession }}>
      {children}
    </LoginContext.Provider>
  );
};
