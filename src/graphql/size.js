import { gql } from "@apollo/client";

export const Sizes = gql`
  query Query {
    Sizes {
      _id
      name
      stock
      available
    }
  }
`;

export const Size_save = gql`
  mutation Size_save($sizeData: Property_data_size) {
    Size_save(sizeData: $sizeData)
  }
`;
