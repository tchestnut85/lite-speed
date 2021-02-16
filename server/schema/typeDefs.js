const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Courses {
    _id: ID
    title: String
  }

  type Lesson {
    _id: ID
    name: String
    courses: Courses
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
    password: String
    savedCourses: [Courses]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    courses: [Courses]
    lessons(courses: ID, title: String): [Lesson]
    lesson(_id: ID!): Lesson
    users: [User]
    user: User
    me: User
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, email: String, lastName: String, password: String): Auth
    login(email: String!, password: String!): Auth
    changePassword(password: String): User
    saveCourses(courseId: ID!, courseTitle: String!): User
  }
`;

module.exports = typeDefs;
