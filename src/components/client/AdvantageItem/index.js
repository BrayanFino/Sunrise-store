import React from "react";
import Image from "next/image";
import { Grid, GridItem, Show, Text } from "@chakra-ui/react";

export const AdvantageItem = ({ advantage }) => {
  return (
    <Grid
      gridTemplateColumns={{
        base: "1fr",
        sm: "40px 1fr",
      }}
      alignItems="center"
      justifyItems="center"
      gap={{
        base: "1rem",
        sm: "0.5rem",
      }}
    >
      <GridItem>
        <Image src={advantage.img} alt="truck" width={40} height={40} />
      </GridItem>
      <GridItem>
        <Text textTransform="uppercase" fontSize="sm" fontWeight="bold">
          {advantage.title}
        </Text>
        <Show above="sm">
          <Text fontSize={{ base: "xs", sm: "md" }}>
            {advantage.description}
          </Text>
        </Show>
      </GridItem>
    </Grid>
  );
};
