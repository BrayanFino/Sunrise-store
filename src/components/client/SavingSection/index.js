import {
  Button,
  Flex,
  FormControl,
  Grid,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";

export const SavingSection = () => {
  return (
    <Flex
      height={{
        md: "28.75rem",
      }}
      maxW="33.25rem"
      m="auto"
      as="article"
      bgColor="white"
      p="2rem"
    >
      <Grid gap="2rem" maxW="21.25rem" m="auto" textAlign="center">
        <header>
          <Heading size="sm" textTransform="uppercase" color="gray">
            Special Offer
          </Heading>
          <Heading size="xl" textTransform="uppercase">
            Subscribe And{" "}
            <Text as="span" color="red">
              Get 10% Off
            </Text>
          </Heading>
        </header>
        <Grid as="form" action="" gap="1.5rem">
          <FormControl>
            <Input
              height="4rem"
              textAlign="inherit"
              borderRadius="0"
              type="email"
              placeholder="Enter your email"
              backgroundColor="gray.100"
            />
          </FormControl>
          <Button size={"xl"}>Subscribe</Button>
        </Grid>
      </Grid>
    </Flex>
  );
};
