import Link from "next/link";
import { Box, Grid, Heading } from "@chakra-ui/react";
import { ProductFilterCard } from "../ProductFilterCard";

export const ProductFilter = ({ products, ganderName }) => {
  return (
    <Box marginBottom="4rem">
      <Heading
        as="h2"
        size="md"
        textTransform="uppercase"
        margin={{
          base: "0 0 1rem 1rem",
          md: "0 0 1.5rem",
        }}
      >
        {ganderName}
      </Heading>
      <Grid
        gridTemplateColumns={{
          base: "repeat(auto-fit, 255px)",
          md: "repeat(auto-fit, minmax(255px, 1fr))",
        }}
        gridAutoFlow={{
          base: "column",
          md: "row",
        }}
        alignItems="stretch"
        gridAutoColumns="255px"
        gridAutoRows="1fr"
        overflowX="scroll"
        scrollSnapType="x mandatory"
        scrollSnapStop="always"
        gap={"1.85rem"}
      >
        {products?.map((product, i) => (
          <Link href={`/productDetail/${product?._id}`} key={i}>
            <Box
              marginLeft={{
                base: i === 0 ? "1rem" : "0",
                md: "0",
              }}
              scrollSnapAlign="center"
              border="solid 1px"
              borderColor={"gray.200"}
              padding={"1rem"}
              cursor="pointer"
            >
              <ProductFilterCard product={product} />
            </Box>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};
