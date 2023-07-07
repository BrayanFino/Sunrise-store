import React from "react";
import { Box } from "@chakra-ui/react";

export const MainCategory = ({ categorie }) => {
  return (
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
      cursor="pointer"
    >
      {categorie.name}
    </Box>
  );
};
