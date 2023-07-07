import { gql } from "@apollo/client";

export const Category = gql`
  query Query {
    Categories {
        _id
      name
    }
  }
`;

export const Category_save = gql`
  mutation Mutation($categoryData: Property_data) {
    Category_save(categoryData: $categoryData)
  }
`;
