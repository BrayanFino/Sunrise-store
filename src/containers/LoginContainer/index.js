import React from "react";
import { useLoginContainer } from "@/hooks/useLoginContainer";
import { LoginForm } from "@/components/client/LoginForm";

export const LoginContainer = () => {
  const { initialValLogin, handleGetUserLogin, isLoading } = useLoginContainer();

  return (
    <LoginForm initialValues={initialValLogin} onSubmit={handleGetUserLogin} isLoading={isLoading}/>
  );
};
