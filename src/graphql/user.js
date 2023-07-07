import { gql } from "@apollo/client";

export const Users = gql`
  query Users {
    Users {
      _id
      fullName
      phone
      nit
      address
      gender {
        _id
        name
      }
      email
      password
    }
  }
`;

export const User_save = gql`
  mutation User_save($userData: User_data) {
    User_save(userData: $userData)
  }
`;

export const User_Login = gql`
  query Query($userLogin: User_login) {
    User_login(userLogin: $userLogin)
  }
`;
