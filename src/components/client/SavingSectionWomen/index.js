import Image from "next/image";
import { Box } from "@chakra-ui/react";
import womenStanding from "/public/img/woman-standing.png";

export const SavingSectionWomen = () => {
  return (
    <Box
      position="absolute"
      top={{
        base: "calc(-242px + 1.5rem)",
        md: "initial",
      }}
      bottom={{
        md: "0",
      }}
      left={{
        base: "1.5rem",
        md: "50%",
      }}
      transform={{
        md: "translateX(-530px)",
      }}
      height={{
        base: "242px",
        md: "545px",
      }}
      width={{
        base: "128px",
        md: "311px",
      }}
    >
      <Image src={womenStanding} objectFit="cover" layout="fill" alt="" />
    </Box>
  );
};
