import { Products } from "@/graphql/product";
import { useLazyQuery, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

export const useProductsContainer = () => {
  const [filters, setFilter] = useState({
    genderId: "",
    subCategoryId: "",
  });

  const [getProductFilter, { data: filterProducts }] = useLazyQuery(Products);

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

  const handleProductFilter = (genderId, subCategoryId) => {
    setFilter({
      genderId,
      subCategoryId,
    });
  };

  // useEffect(() => {
  //   getProductFilter({
  //     variables: {
  //       filters
  //     }
  //   })
  // }, [filters, getProductFilter])

  return {
    productsWomen,
    productsMen,
    handleProductFilter,
    // filterProducts,
    // filters,
    // setFilter
  };
};
