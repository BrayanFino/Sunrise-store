import React from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  Grid,
  Input,
  Select,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { LoginImage } from "../LoginImage";
import { Field, Form, Formik } from "formik";
import { MdArrowRightAlt } from "react-icons/md";
import RegisterFashion from "/public/img/registerFashion.png";

export const RegisterForm = ({
  initialValues,
  gender,
  onSubmit,
  isLoading,
}) => {
  return (
    <Box position="relative" bg="#fafafad4">
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
        <Container minH="110px" p={{ base: 5, md: 10 }}>
          <Center>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              {() => (
                <Form>
                  <Stack
                    spacing={5}
                    boxSize={{ base: "xs", sm: "sm", md: "lg" }}
                    h="max-content !important"
                    bg="rgba(260, 260, 260, 0.7)"
                    backdropFilter="blur(4px)"
                    rounded="lg"
                    boxShadow="lg"
                    p={{ base: 5, sm: 10 }}
                    mt="20"
                  >
                    <Text
                      fontSize="25px"
                      fontWeight="bold"
                      textAlign="center"
                      color="#7D3C98"
                    >
                      Registrarse
                    </Text>

                    <Flex flexDirection="row" gap={2}>
                      <FormControl id="name">
                        <Field
                          as={Input}
                          type="text"
                          name="name"
                          variant="flushed"
                          placeholder="Nombre completo"
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

                      <FormControl id="nit">
                        <Field
                          as={Input}
                          type="number"
                          name="nit"
                          variant="flushed"
                          placeholder="Cédula"
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
                    </Flex>

                    <Flex flexDirection="row" gap={2}>
                      <FormControl id="address">
                        <Field
                          as={Input}
                          type="text"
                          name="address"
                          variant="flushed"
                          placeholder="Dirección"
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

                      <FormControl id="genderId">
                        <Field
                          as={Select}
                          type="text"
                          name="genderId"
                          variant="flushed"
                          placeholder="Selecciona un género"
                          _focus={{
                            boxShadow: "none",
                            outline: "none",
                            borderBottomColor: "#884299",
                          }}
                          sx={{
                            borderBottomColor: "#884299",
                          }}
                        >
                          {gender?.map((gend, i) => (
                            <option key={i} value={gend.id}>
                              {gend.name}
                            </option>
                          ))}
                        </Field>
                      </FormControl>
                    </Flex>

                    <FormControl id="phone">
                      <Field
                        as={Input}
                        type="number"
                        name="phone"
                        variant="flushed"
                        placeholder="Teléfono"
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

                    <FormControl id="email">
                      <Field
                        as={Input}
                        type="email"
                        name="email"
                        variant="flushed"
                        placeholder="Correco electrónico"
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

                    <Flex flexDirection="row" gap={2}>
                      <FormControl id="password">
                        <Field
                          as={Input}
                          type="password"
                          name="password"
                          variant="flushed"
                          placeholder="Contraseña"
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

                      <FormControl id="confirmPassword">
                        <Field
                          as={Input}
                          type="password"
                          name="confirmPassword"
                          variant="flushed"
                          placeholder="Confirmar contraseña"
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
                    </Flex>

                    <Link href="/login">
                      <Text
                        fontSize={14}
                        cursor="pointer"
                        color="#7D3C98"
                        textAlign="center"
                      >
                        Ya tienes una cuenta? Inicia Sesión
                      </Text>
                    </Link>
                    {isLoading ? (
                      <Flex align="center" justify="center">
                        <Spinner color="white" size="sm" mr={2} />
                        Cargando...
                      </Flex>
                    ) : (
                      <Button type="submit" size="lg">
                        Registrar Usuario
                        <MdArrowRightAlt fontSize={20} />
                      </Button>
                    )}
                  </Stack>
                </Form>
              )}
            </Formik>
          </Center>
        </Container>

        <LoginImage image={RegisterFashion} />
      </Grid>
    </Box>
  );
};
