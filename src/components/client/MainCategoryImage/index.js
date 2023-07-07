import React from "react";
import Image from "next/image";
import { MainCategory } from "../MainCategory";
import { Flex, Grid, GridItem } from "@chakra-ui/react";

export const MainCategoryImage = () => {
  const categories = [
    {
      name: "Joyas",
      img: "/img/joyas.png",
    },
    {
      name: "Hombre",
      img: "/img/men.png",
    },
    {
      name: "Mujer",
      img: "/img/women.png",
    },
    {
      name: "Niños",
      img: "/img/kids.png",
    },
  ];

  return (
    <Grid
      templateColumns={{
        base: "1fr 1fr",
        md: "2fr 1fr 1fr",
      }}
      templateRows={{
        base: "130px 154px 130px",
        md: "200px 260px",
      }}
      gap={{
        base: "0.5rem",
        md: "1rem",
        lg: "2rem",
      }}
      templateAreas={{
        base: `
      "cat1 cat1"
      "cat2 cat3"
      "cat4 cat4"
    `,
        md: `
      "cat1 cat2 cat3"
      "cat1 cat4 cat4"
    `,
      }}
    >
      {categories.map((categorie, i) => {
        return (
          <GridItem
            key={i}
            fontSize={{
              base: "0.85rem",
              md: "1rem",
            }}
            position="relative"
            w="100%"
            height="100%"
            gridArea={`cat${i + 1}`}
          >
            <Image
              src={categorie.img}
              alt="categorie"
              fill={true}
              style={{
                objectFit: "cover",
              }}
              priority="true"
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 800px"
            />
            <Flex alignItems="center" justifyContent="center" height="100%">
              <MainCategory categorie={categorie} />
            </Flex>
          </GridItem>
        );
      })}
    </Grid>
  );
};
