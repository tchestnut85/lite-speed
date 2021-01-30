const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Courses {
    _id: ID
    title: String
  }

  type Lesson {
    _id: ID
    courseName: Courses
    intro: String
    content: String
    image: String
    price: Float
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
    courses: [Courses]
    lessons(courses: ID, title: String): [Lesson]
    lesson(lessonId: ID!): Lesson
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
