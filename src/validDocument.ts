import { graphql } from './gql';

const validDocument = graphql(`
  mutation validUpdateUser($input: UpdateUserInput!) {
    validUpdateUser(input: $input) {
      user {
        id
      }
    }
  }
`);
