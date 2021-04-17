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

  type ChatRoom {
    _id: ID!
    roomName: String!
    users: [User]
    messages: [Message]
    lastMessage: Message
  }

  type Message {
    _id: ID!
    user: User
    content: String!
  }

  type Query {
    courses: [Courses]
    lessons(courses: ID, title: String): [Lesson]
    lesson(_id: ID!): Lesson
    users: [User]
    user: User
    me: User
    messages: [Message]
    chatRooms: [ChatRoom]
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, email: String, lastName: String, password: String): Auth
    login(email: String!, password: String!): Auth
    changePassword(password: String): User
    saveCourses(courseId: ID!, courseTitle: String!): User
    removeCourse(courseId: ID!): User
    createChatRoom(roomName: String!, userIds: [ID!]!): ChatRoom 
  }
`;

module.exports = typeDefs;
