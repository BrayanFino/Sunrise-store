import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
import { User_Login } from "@/graphql/user";
import { useLazyQuery } from "@apollo/client";

export const useLoginContainer = () => {
  //State
  const [isLoading, setIsLoading] = useState(false);

  //Query
  const [getUserLogin, { data: tokenUser }] = useLazyQuery(User_Login);

  //Initial Values
  const initialValLogin = {
    email: "",
    password: "",
  };

  //Handle

  const handleGetUserLogin = (values) => {
    setIsLoading(true);
    setTimeout(() => {
      getUserLogin({
        variables: {
          userLogin: {
            email: values.email,
            password: values.password,
          },
        },
      });
      setIsLoading(false);
    }, 5000);
  };

  //UseEffect
  useEffect(() => {
    if (typeof tokenUser?.User_login === "string") {
      localStorage.setItem("session", tokenUser?.User_login);
      const decodedToken = jwt.decode(tokenUser?.User_login);
      const rol = decodedToken?._doc?.rolId;
      if (rol === "ae8b3d2d-3dac-4fe1-9d3d-f2f91661de47") {
        window.location.href = "/admin";
      }
      if (rol === "7dd41eda-1b60-4ca2-88f4-e8c0284f18c4") {
        window.location.href = "/main";
      }
    }
  }, [tokenUser]);

  useEffect(() => {
    const tokenSession = localStorage.getItem("session");
    const decodedToken = jwt.decode(tokenSession);
    if (tokenSession !== null) {
      window.location.href = "/main";
    }
  }, []);

  return {
    initialValLogin,
    handleGetUserLogin,
    tokenUser,
    isLoading,
  };
};
