import gql from "graphql-tag";

/* add GraphQL client-side queries here */
export const GET_USER = gql`
  query {
    currentUser {
      id
    }
  }
`;
export const GET_WORDS = gql`
  query GetWords {
    freqWords {
      defintion
      wordNumber
      Word
    }
  }
`;
