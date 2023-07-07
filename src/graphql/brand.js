import { gql } from "@apollo/client";

export const Brands = gql`
  query Query {
    Brands {
      _id
      image
      name
    }
  }
`;

export const Brand_Save = gql`
  mutation Brand_save($brandData: Property_data_brand) {
    Brand_save(brandData: $brandData)
  }
`;

export const Brand_delete = gql`
  mutation Mutation($id: String!) {
    Brand_delete(_id: $id)
  }
`;
