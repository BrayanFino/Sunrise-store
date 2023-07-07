import React from "react";
import Link from "next/link";
import { Field, Form, Formik } from "formik";
import { MdArrowRightAlt } from "react-icons/md";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Grid,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { LoginImage } from "../LoginImage";
import loginFashion from "/public/img/loginFashion.png";

export const LoginForm = ({ initialValues, onSubmit, isLoading }) => {
  return (
    <Box bg="#fafafad4" position="relative">
      {isLoading && (
        <Box
          position="fixed"
          top={0}
          left={0}
          width="100%"
          height="100%"
          backgroundColor="rgba(0, 0, 0, 0.5)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex={999}
        >
          <Spinner color="white" size="xl" />
        </Box>
      )}
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} minH="100vh">
        <Center>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {() => (
              <Form>
                <Flex
                  flexDirection="column"
                  boxSize={{ base: "xs", sm: "sm", md: "md" }}
                  gap={4}
                  rounded="lg"
                  boxShadow="lg"
                  bg="rgba(260, 260, 260, 0.7)"
                  backdropFilter="blur(4px)"
                  p={{ base: 5, sm: 10 }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text fontSize="28px" fontWeight="bold" color="#7D3C98">
                    Iniciar Sesíon
                  </Text>
                  <FormControl id="email">
                    <Field
                      as={Input}
                      type="email"
                      name="email"
                      variant="flushed"
                      placeholder="Correo"
                      _focus={{
                        boxShadow: "none",
                        outline: "none",
                        borderBottomColor: "#884299",
                      }}
                      sx={{
                        borderBottomColor: "#884299",
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <Field
                      as={Input}
                      type="password"
                      name="password"
                      variant="flushed"
                      placeholder="Password"
                      _focus={{
                        boxShadow: "none",
                        outline: "none",
                        borderBottomColor: "#884299",
                      }}
                      sx={{
                        borderBottomColor: "#884299",
                      }}
                    />
                  </FormControl>
                  <Link href="/register">
                    <Text fontSize={16} cursor="pointer" color="#7D3C98">
                      No tienes una cuenta? Regístrate ahora!
                    </Text>
                  </Link>
                  <Button type="submit" size="lg">
                    Iniciar Sesión
                    <MdArrowRightAlt fontSize={20} />
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </Center>

        <LoginImage image={loginFashion} />
      </Grid>
    </Box>
  );
};
