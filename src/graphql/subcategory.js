import { gql } from "@apollo/client";

export const Subcategories = gql`
  query SubCategories($filters: Filters_subcategory) {
    SubCategories(filters: $filters) {
      _id
      name
      category {
        _id
        name
      }
    }
  }
`;

export const SubCategory_save = gql`
  mutation Mutation($subCategoryData: Property_data_subCategory) {
    SubCategory_save(subCategoryData: $subCategoryData)
  }
`;
