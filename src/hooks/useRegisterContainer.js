import { useMutation, useQuery } from "@apollo/client";
import { User_save, Users } from "@/graphql/user";
import { Genders } from "@/graphql/gender";
import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";

export const useRegisterContainer = () => {
  const toast = useToast();

  //State
  const [isLoading, setIsLoading] = useState(false);

  //Query
  const { data: user } = useQuery(Users);

  const { data: gender } = useQuery(Genders);
  //Mutation
  const [createUser, { data: isCreateUser }] = useMutation(User_save, {
    refetchQueries: [
      {
        query: Users,
      },
    ],
  });

  //Initial values
  const initialValCreate = {
    fullName: "",
    phone: "",
    nit: "",
    address: "",
    genderId: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  //Handle
  const handleCreateUser = (values) => {
    setIsLoading(true);
    setTimeout(() => {
      createUser({
        variables: {
          userData: {
            fullName: values.fullName,
            phone: values.phone,
            nit: values.nit,
            address: values.address,
            genderId: values.genderId,
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword,
            rolId: "7dd41eda-1b60-4ca2-88f4-e8c0284f18c4",
          },
        },
      });
      setIsLoading(false);
    }, 1000);
  };

  //UseEffect

  useEffect(() => {
    if (isCreateUser?.User_save) {
      toast({
        title: "Proceso correcto",
        description: "Usuario creadio con éxito",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [isCreateUser?.User_save, toast]);

  useEffect(() => {
    if (isCreateUser?.User_save) {
      window.location.href = "/login";
    }
  });

  return {
    initialValCreate,
    handleCreateUser,
    gender,
    isLoading,
    user,
  };
};
