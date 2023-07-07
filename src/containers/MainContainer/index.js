import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { MainCategoryImage } from "@/components/client/MainCategoryImage";
import { Advantage } from "@/components/client/Advantage";
import { useMainContainer } from "@/hooks/useMainContainer";
import { ProductFilter } from "@/components/client/ProductFilter";
import { PromoBannerList } from "@/components/client/PromoBannerList";
import { SavingSectionMain } from "@/components/client/SavingSectionMain";
import { BlogPostList } from "@/components/client/BlogPostList";

export const MainContainer = () => {
  const { productsMen, productsWomen } = useMainContainer();
  return (
    <Box as="main" mt="2rem">
      <Container>
        <MainCategoryImage />
        <Advantage />
      </Container>

      <Container
        maxW={{
          base: "100%",
          md: "80rem",
        }}
        paddingX="0"
      >
        <ProductFilter
          products={productsWomen?.Products}
          ganderName="Women Clothes"
        />
        <ProductFilter
          products={productsMen?.Products}
          ganderName="Men Clothes"
        />
      </Container>

      <Container>
        <PromoBannerList />
      </Container>

      <Container
        p="0"
        maxW="100%"
        m={{
          base: "14.75rem 0 4rem",
          md: "2rem auto 6rem",
        }}
      >
        <SavingSectionMain />
      </Container>
      
      <Container>
        <BlogPostList />
      </Container>
    </Box>
  );
};
