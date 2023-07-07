import React from "react";
import Image from "next/image";
import { Box } from "@chakra-ui/react";

export const PromoBanner = ({ image, children }) => {
  return (
    <Box
      display="flex"
      position="relative"
      alignItems="center"
      justifyContent="center"
    >
      <Image src={image} alt="women" width="auto" height="auto"/>
      <Box
        position="absolute"
        left="50%"
        top="50%"
        transform="translate(-50%, -50%)"
      >
        <Box
          bgColor="white"
          padding="1rem 1.5rem"
          position="relative"
          width="fit-content"
          zIndex="1"
          textTransform="uppercase"
          fontWeight="bold"
          borderRadius="0.25rem"
          textAlign="center"
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
