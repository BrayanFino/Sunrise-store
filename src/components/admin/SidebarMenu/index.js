import {
  Box,
  CloseButton,
  Container,
  Flex,
  Grid,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { FiHome, FiUsers } from "react-icons/fi";
import { FaRegMoneyBillAlt, FaGlassMartiniAlt } from "react-icons/fa";
import { MdMoneyOff, MdOutlineTableRestaurant } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";

export const SidebarMenu = ({ closeSession }) => {
  
  const LinkItems = [
    { name: "Inicio", icon: FiHome, path: "/home" },
    { name: "Mesas", icon: MdOutlineTableRestaurant, path: "/table" },
    { name: "Costos", icon: MdMoneyOff, path: "/expenses" },
    { name: "Facturas", icon: FaRegMoneyBillAlt, path: "/bills" },
    { name: "Clientes", icon: FiUsers, path: "/customers" },
    { name: "Productos", icon: FaGlassMartiniAlt, path: "/products" },
  ];

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      minH="100vh"
    >
      <Flex h="20" alignItems="center" justifyContent="space-between">
        <Text
          fontSize="xl"
          margin="auto"
          fontFamily="monospace"
          fontWeight="bold"
          color="#b2443e"
        >
          Sunrise
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} />
      </Flex>
      {LinkItems.map((items, i) => (
        <Link
          key={i}
          href={items.path}
          style={{ textDecoration: "none" }}
          _focus={{ boxShadow: "none" }}
        >
          <Flex
            align="center"
            p="4"
            mx="4"
            mt={5}
            borderRadius="lg"
            role="group"
            cursor="pointer"
            _hover={{
              bg: "#b2443e",
              color: "white",
            }}
          >
            <Icon
              mr="4"
              fontSize="20"
              _groupHover={{
                color: "white",
              }}
              as={items.icon}
            />
            {items.name}
          </Flex>
        </Link>
      ))}
      <Flex justifyContent="center" alignItems="center">
        <AiOutlineLogout
          fontSize={25}
          cursor="pointer"
          onClick={closeSession}
        />
      </Flex>
    </Box>
  );
};
