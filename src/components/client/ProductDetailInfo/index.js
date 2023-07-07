import {
  AspectRatio,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineComment,
  AiOutlineCreditCard,
  AiOutlineSafety,
} from "react-icons/ai";
import { BsChatHeart, BsPaypal } from "react-icons/bs";
import { FaCcAmex, FaCcMastercard, FaCcStripe, FaCcVisa } from "react-icons/fa";
import { TbPigMoney } from "react-icons/tb";

export const ProductDetailInfo = ({ productDetail }) => {
  return (
    <Container
      as={Grid}
      gridTemplateColumns="1fr 34.25rem"
      mt="2rem"
      mb="6rem"
      gap="2rem"
    >
      <AspectRatio
        ratio={1}
        position="relative"
        maxWidth="100%"
        marginBottom="1rem"
      >
        <Image
          src={productDetail?.Products[0].image}
          alt="detail"
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </AspectRatio>

      <Box>
        <Heading
          as="h3"
          textTransform="uppercase"
          fontSize="md"
          color="gray.500"
          mb="0.5rem"
        >
          Description
        </Heading>
        <Text>
          In some scenarios, you might need to add an icon or button inside the
          input component. Chakra UI exports InputLeftElement and
          InputRightElement to help with this use case. If the left or right is
          an icon or text, you can pass pointerEvents=none to InputLeftElement
          or InputRightElement to ensure that clicking on them focused the
          input.
        </Text>

        <Divider my="2rem" variant="bold" />

        <Heading
          as="h3"
          textTransform="uppercase"
          fontSize="md"
          color="gray.500"
          mb="0.5rem"
        >
          Tallas
        </Heading>
        <Flex gap="1rem">
          {productDetail?.Products[0].size?.map((siz, i) => (
            <Flex
              border="1px solid"
              w="4rem"
              height="4rem"
              key={i}
              p={1}
              justifyContent="center"
              alignItems="center"
            >
              <Text fontSize={24} fontWeight="bold">
                {siz.name}
              </Text>
            </Flex>
          ))}
        </Flex>

        <Divider my="2rem" variant="bold" />

        <Flex alignItems="center" gap="1.5rem">
          <Text>{`$ ${Math.floor(
            productDetail?.Products[0]?.price
          ).toLocaleString()}`}</Text>

          <Button>Add to cart</Button>
          <Link href="#">
            <BsChatHeart fontSize={24} />
          </Link>
          <Link href="#">
            <AiOutlineComment fontSize={24} />
          </Link>
        </Flex>
        <Divider my="2rem" variant="bold" />

        <Flex
          gap="1.75rem"
          fontSize="sm"
          mb="2rem"
          justifyContent="space-between"
        >
          <Flex alignItems="center" gap="0.25rem">
            <AiOutlineCreditCard fontSize={30} />
            <Link href="/">
              <Text cursor="pointer">Shipping &Delivery</Text>
            </Link>
          </Flex>
          <Flex alignItems="center" gap="0.25rem">
            <TbPigMoney fontSize={30} />
            <Link href="/">
              <Text cursor="pointer">Returns & Exchanges</Text>
            </Link>
          </Flex>
          <Flex alignItems="center" gap="0.25rem">
            <AiOutlineSafety fontSize={30} />
            <Link href="/">
              <Text cursor="pointer">Ask a question</Text>
            </Link>
          </Flex>
        </Flex>

        <Flex alignItems={"center"} gap="1.5rem">
          <Heading
            as="h3"
            whiteSpace={"nowrap"}
            textTransform={"uppercase"}
            fontSize="md"
            color="gray.500"
          >
            Métodos de Pago
          </Heading>
          <Divider variant="bold" />
        </Flex>

        <Flex justifyContent={"space-between"} mt="1.5rem" mb="2rem">
          <FaCcStripe fontSize={50} color="#5433FF" />
          <FaCcVisa fontSize={50} color="#1A1F71" />
          <BsPaypal fontSize={50} color="#1A1F71" />
          <FaCcMastercard fontSize={50} color="	#FF5F00" />
          <FaCcAmex fontSize={50} color="#2E77BB" />
        </Flex>
      </Box>
    </Container>
  );
};
