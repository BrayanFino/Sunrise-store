import Image from "next/image";
import { Box } from "@chakra-ui/react";
import menWalking from "/public/img/men-walking.png";

export const SavingSectionMan = () => {
  return (
    <Box
      position="absolute"
      top={{
        base: "calc(-236px + 1.5rem)",
        md: "initial",
      }}
      right={{
        base: "32px",
        md: "50%",
      }}
      transform={{
        md: "translateX(470px)",
      }}
      height={{
        base: "236px",
        md: "524px",
      }}
      width={{
        base: "99px",
        md: "219px",
      }}
    >
      <Image src={menWalking} objectFit="cover" layout="fill" alt="" />
    </Box>
  );
};
