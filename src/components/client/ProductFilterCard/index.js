import Image from "next/image";
import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { AspectRatio, Box, Flex, Text } from "@chakra-ui/react";

export const ProductFilterCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Box
      w="100%"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      position="relative"
    >
      {isHovered && (
        <Flex
          p={1}
          top={0}
          right={0}
          bg="gray.700"
          position="absolute"
          borderRadius="50%"
          alignItems="center"
          justifyContent="center"
        >
          <FiEye fontSize={20} color="white" />
        </Flex>
      )}
      <AspectRatio
        position="relative"
        ratio={1}
        maxWidth="100%"
        marginBottom={"1rem"}
      >
        <Image
          src={product?.image}
          alt="women"
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </AspectRatio>
      <Text color="gray.500" marginBottom="0.75rem" noOfLines="2">
        {product?.name}
      </Text>
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontWeight="bold">
          {`$ ${Math.floor(product?.price).toLocaleString()}`}
        </Text>
        <Text fontSize="lg">{product?.brand?.name}</Text>
      </Flex>
    </Box>
  );
};
