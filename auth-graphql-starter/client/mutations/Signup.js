import gql from "graphql-tag";

export default gql`
  mutation Signup($email: String, $password: String) {
    sign(email: $email, password: $password) {
      id
      email
    }
  }
`;
