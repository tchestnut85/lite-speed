const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Topic {
    _id: ID
    name: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    topics: [Topic]
    users: [User]
    user: User
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
