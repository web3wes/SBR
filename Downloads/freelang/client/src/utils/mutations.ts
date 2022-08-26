import gql from "graphql-tag";

/* add GraphQL client-side mutations here */

// Auth mutations
export const LOG_IN = gql`
  mutation logIn($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      token
    }
  }
`;

export const SIGN_UP = gql`
  mutation CreateUser($email: String!, $password: String!, $username: String!) {
    userCreate(email: $email, password: $password, username: $username) {
      user {
        email
      }
    }
  }
`;

export const REFRESH_TOKEN = gql`
  mutation RefreshToken($token: String!) {
    refreshToken(token: $token) {
      token
      payload
      refreshExpiresIn
    }
  }
`;

export const VERIFY_TOKEN = gql`
  mutation VerifyToken($token: String!) {
    verifyToken(token: $token) {
      payload
    }
  }
`;
