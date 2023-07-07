import React from "react";
import Image from "next/image";
import { Box, Heading, Text } from "@chakra-ui/react";

export const BlogPostCard = ({ image, title, summary }) => {
  return (
    <Box as="article">
      <Image src={image} alt="" />
      <Box
        p="1rem"
        m="0 1.5rem"
        position="relative"
        zIndex="1"
        bgColor="#FAFAFA"
        marginTop="-29px"
        borderRadius={5}
      >
        <Heading as="h3" fontSize="md" textTransform="uppercase" mb="0.75rem">
          {title}
        </Heading>
        <Text>{summary}</Text>
      </Box>
    </Box>
  );
};
