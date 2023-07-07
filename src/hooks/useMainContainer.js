import { useQuery } from "@apollo/client";
import { Products } from "@/graphql/product";

export const useMainContainer = () => {
  const { data: productsWomen } = useQuery(Products, {
    variables: {
      filters: { genderId: "79df6778-dd2c-45f9-85c8-d2db431d51e3" },
    },
  });

  const { data: productsMen } = useQuery(Products, {
    variables: {
      filters: { genderId: "b6ec36d3-8aae-442a-9643-b3b94ef1ecc1" },
    },
  });

  return {
    productsMen,
    productsWomen,
  };
};
