import React from "react";
import Image from "next/image";
import { FaTiktok } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";

export const LoginImage = ({ image }) => {
  return (
    <Grid position="relative">
      <Image
        alt="login"
        fill={true}
        src={image}
        loading="eager"
        style={{ objectFit: "cover" }}
      />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        width="100%"
        height="100%"
        bg="#6e10949a"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="40px" fontWeight="bold">
          Sunrise | <span>Store</span>
        </Text>
      </Box>
      <Flex
        m={10}
        gap={4}
        bottom={9}
        position="absolute"
        alignItems="center"
        flexDirection="column"
        justifySelf="flex-end"
      >
        <Text
          fontSize={20}
          color="white"
          fontWeight="bold"
          style={{ transform: "rotate(90deg)", marginLeft: "10px" }}
        >
          Redes
        </Text>
        <BsFacebook fontSize={20} color="white" />
        <AiFillInstagram fontSize={20} color="white" />
        <TbWorldWww fontSize={20} color="white" />
        <FaTiktok fontSize={20} color="white" />
      </Flex>
    </Grid>
  );
};
