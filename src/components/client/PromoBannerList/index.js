import { SimpleGrid, Text } from "@chakra-ui/react";
import { PromoBanner } from "../PromoBanner";
import bannerSeason from "/public/img/banner-season.png";
import bannerSale from "/public/img/banner-sales.png";

export const PromoBannerList = () => {
  return (
    <SimpleGrid
      minChildWidth="320px"
      spacing={{
        base: "1rem",
        md: "2rem",
      }}
    >
      <PromoBanner image={bannerSeason}>
        <Text fontSize="sm" color="gray.500">
          New Season
        </Text>
        <Text fontSize="lg" fontWeight="bold" whiteSpace="nowrap">
          lookbook collection
        </Text>
      </PromoBanner>
      <PromoBanner image={bannerSale}>
        <Text fontSize="sm" color="gray.500">
          Sale
        </Text>
        <Text fontSize="lg" fontWeight="bold" whiteSpace="nowrap">
          Get UP to{" "}
          <Text as="span" color="red">
            50% off
          </Text>
        </Text>
      </PromoBanner>
    </SimpleGrid>
  );
};
