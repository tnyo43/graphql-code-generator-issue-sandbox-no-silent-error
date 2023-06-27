import { graphql } from './gql';

const invalidDocument = graphql(`
  mutation invalidUpdateUser($input: UpdateUserInput!) {
    invalidUpdateUser(input: $input) {
      user {
      }
    }
  }
`);
