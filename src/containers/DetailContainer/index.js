import { ProductDetailHeader } from "@/components/client/ProductDetailHeader";
import { ProductDetailInfo } from "@/components/client/ProductDetailInfo";
import { Products } from "@/graphql/product";
import { useQuery } from "@apollo/client";
import { Flex, Text } from "@chakra-ui/react";
import { Fragment } from "react";

export const DetailContainer = ({ productId }) => {
  console.log(productId);
  const { data: productDetail } = useQuery(Products, {
    variables: {
      filters: {
        _id: productId,
      },
    },
  });
  return (
    <Fragment>
      <ProductDetailHeader productDetail={productDetail}>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex gap="0.5rem" alignItems="baseline">
            <Text fontSize="sm">2 Reviews</Text>
          </Flex>

          <Flex gap="1rem" fontSize="sm">
            <Text>
              Stock: <b>{` ${productDetail?.Products[0]?.amount} unidades`}</b>
            </Text>
            <Text>
              Availability:
              {productDetail?.Products[0]?.size[0].available > 0 ? (
                <b> Disponible</b>
              ) : (
                <b>No disponible</b>
              )}
            </Text>
          </Flex>
        </Flex>
      </ProductDetailHeader>

      <ProductDetailInfo productDetail={productDetail}/>
    </Fragment>
  );
};
