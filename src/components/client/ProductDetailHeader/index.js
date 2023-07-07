import { FiShare2 } from "react-icons/fi";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export const ProductDetailHeader = ({ productDetail, children }) => {
  return (
    <Box bg="gray.100" padding="1rem">
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex
            as={UnorderedList}
            listStyleType="none"
            fontSize="sm"
            gap={2}
            m={0}
          >
            <Flex>
              <Link href="/">
                <Text cursor="pointer" className="underline">
                  Home
                </Text>
              </Link>
              <Icon
                as={MdKeyboardDoubleArrowRight}
                m={0}
                ml={2}
                mr={0}
                fontSize={16}
                color="gray.500"
              />
            </Flex>
            <Flex>
              <Link href="/">
                <Text cursor="pointer" className="underline">
                  {productDetail?.Products[0]?.category.name}
                </Text>
              </Link>
              <Icon
                as={MdKeyboardDoubleArrowRight}
                m={0}
                ml={2}
                mr={0}
                fontSize={16}
                color="gray.500"
              />
            </Flex>
            <Flex>
              <Link href="/">
                <Text cursor="pointer" className="underline">
                  {productDetail?.Products[0]?.subCategory?.name}
                </Text>
              </Link>
              <Icon
                as={MdKeyboardDoubleArrowRight}
                m={0}
                ml={2}
                mr={0}
                fontSize={16}
                color="gray.500"
              />
            </Flex>
            <Flex>
              <Link href="/">
                <Text cursor="pointer">{productDetail?.Products[0]?.name}</Text>
              </Link>
            </Flex>
          </Flex>
          <Button variant="ghost" leftIcon={<FiShare2 />} fontSize={15}>
            Share
          </Button>
        </Flex>
        <Heading as="h1" fontSize="2xl" textAlign="center" my="1.5rem">
          {productDetail?.Products[0]?.name}
        </Heading>
        {children}
      </Container>
    </Box>
  );
};
