import React, { Fragment, useContext } from "react";
import Link from "next/link";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { AiFillClockCircle, AiOutlineTwitter } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";
import { FiMapPin, FiPhoneCall } from "react-icons/fi";
import { LoginContext } from "@/context/login";

export const HeaderTop = () => {
  const { localSession } = useContext(LoginContext);

  return (
    <Fragment>
      {localSession?.rolId !== "ae8b3d2d-3dac-4fe1-9d3d-f2f91661de47" && (
        <Box bg="black" w="100%" p={2}>
          <Container
            as={Flex}
            color="white"
            justifyContent="space-between"
            fontSize="xs"
          >
            <Flex gap="1.5rem">
              <Flex alignItems="center" gap="0.5rem" cursor="pointer">
                <FiPhoneCall fontSize={17} />
                <Link href="#">
                  <Text fontSize={14}>+57 (311) 3261014</Text>
                </Link>
              </Flex>

              <Flex
                alignItems="center"
                gap="0.5rem"
                display={{ base: "none", sm: "flex" }}
                cursor="pointer"
              >
                <FiMapPin fontSize={17} />
                <Link href="#">
                  <Text fontSize={14}>Medellín, Colombia</Text>
                </Link>
              </Flex>

              <Flex
                alignItems="center"
                gap="0.5rem"
                display={{ base: "none", sm: "flex" }}
                cursor="pointer"
              >
                <AiFillClockCircle fontSize={17} />
                <Link href="#">
                  <Text fontSize={14}>Atencion 24/7</Text>
                </Link>
              </Flex>
            </Flex>

            <Flex gap="1rem">
              <Link href="#">
                <FaFacebook fontSize={18} cursor="pointer" />
              </Link>
              <Link href="#">
                <AiOutlineTwitter fontSize={18} cursor="pointer" />
              </Link>
              <Link href="#">
                <RiInstagramLine fontSize={18} cursor="pointer" />
              </Link>
              <Link href="#">
                <FaTiktok fontSize={18} cursor="pointer" />
              </Link>
            </Flex>
          </Container>
        </Box>
      )}
    </Fragment>
  );
};
