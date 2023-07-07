import { gql } from "@apollo/client";

export const Products = gql`
  query Query($filters: Product_filters) {
    Products(filters: $filters) {
      _id
      name
      price
      amount
      image
      brand {
        _id
        name
      }
      category {
        _id
        name
      }
      gender {
        _id
        name
      }
      size {
        _id
        name
        stock
        available
      }
      subCategory {
        _id
        name
      }
    }
  }
`;

export const Porduct_save = gql`
  mutation Mutation($productData: Product_data) {
    Product_save(productData: $productData)
  }
`;

export const Product_delete = gql`
  mutation Mutation($id: ID!) {
    Product_delete(_id: $id)
  }
`;
