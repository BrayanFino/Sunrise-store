import Link from "next/link";
import { BsBagHeart } from "react-icons/bs";
import { LoginContext } from "@/context/login";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineLogout } from "react-icons/ai";
import React, { Fragment, useContext } from "react";
import { BiSearchAlt2, BiUserCircle } from "react-icons/bi";
import { Box, Container, Flex, Show, Text } from "@chakra-ui/react";

export const Header = () => {
  const { localSession } = useContext(LoginContext);

  const handleCloseSession = () => {
    localStorage.removeItem("session");
    window.location.href = "/login";
  };

  return (
    <Fragment>
      {localSession?.rolId !== "ae8b3d2d-3dac-4fe1-9d3d-f2f91661de47" && (
        <Box
          w="100%"
          as="header"
          borderBottom="solid 2px"
          borderColor="gray.100"
        >
          <Container
            as={Flex}
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex margin="1rem 0" gap="0.5rem">
              <Show below="lg">
                <Box display={{ md: "none" }}>
                  <GiHamburgerMenu />
                </Box>
              </Show>
              <Text
                as={Link}
                href="/main"
                fontSize="20px"
                fontWeight="bold"
                cursor="pointer"
              >
                SUNRISE
              </Text>
            </Flex>

            <Show above="lg">
              <Box as="nav">
                <Flex as="ul" listStyleType="none" gap="2rem">
                  <Link href="#">
                    <Text cursor="pointer" fontSize={18} className="underline">
                      Mujer
                    </Text>
                  </Link>
                  <Link href="#">
                    <Text cursor="pointer" fontSize={18} className="underline">
                      Hombre
                    </Text>
                  </Link>
                  <Link href="#">
                    <Text cursor="pointer" fontSize={18} className="underline">
                      Niños
                    </Text>
                  </Link>
                  <Link href="#">
                    <Text cursor="pointer" fontSize={18} className="underline">
                      Sobre Nosotros
                    </Text>
                  </Link>
                  <Link href="#">
                    <Text cursor="pointer" fontSize={18} className="underline">
                      Contacto
                    </Text>
                  </Link>
                  <Link href="#">
                    <Text cursor="pointer" fontSize={18} className="underline">
                      Testimonios
                    </Text>
                  </Link>
                </Flex>
              </Box>
            </Show>

            <Flex gap="1.5rem">
              <Link href="#">
                <BiSearchAlt2 fontSize={24} cursor="pointer" />
              </Link>
              <Link href="/login">
                <BiUserCircle fontSize={24} cursor="pointer" />
              </Link>
              <Link href="#">
                <BsBagHeart fontSize={20} cursor="pointer" />
              </Link>
              <AiOutlineLogout
                fontSize={20}
                cursor="pointer"
                onClick={handleCloseSession}
              />
            </Flex>
          </Container>
        </Box>
      )}
    </Fragment>
  );
};
