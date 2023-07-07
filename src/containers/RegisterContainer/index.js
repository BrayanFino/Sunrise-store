import React from "react";
import { RegisterForm } from "@/components/client/RegisterForm";
import { useRegisterContainer } from "@/hooks/useRegisterContainer";

export const RegisterContainer = () => {
  const { initialValCreate, gender, handleCreateUser, isLoading } =
    useRegisterContainer();

  return (
    <RegisterForm
      initialValues={initialValCreate}
      gender={gender?.Genders}
      onSubmit={handleCreateUser}
      isLoading={isLoading}
    />
  );
};
