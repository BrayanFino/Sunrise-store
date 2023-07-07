import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Grid,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { SavingSectionMan } from "../SavingSectionMan";
import { SavingSectionWomen } from "../SavingSectionWomen";
import { SavingSection } from "../SavingSection";

export const SavingSectionMain = () => {
  return (
    <Container
      background={"linear-gradient(180deg, #F3F2F2 0%, #DCDBDB 100%);"}
      p={{
        base: "1.5rem",
        md: "3.5556rem",
      }}
      maxW="100%"
      position="relative"
    >
      <SavingSectionMan />

      <SavingSectionWomen />

      <SavingSection />
    </Container>
  );
};
