const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    events: [Event]!
  }

  type Event {
    _id: ID
    name: String
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
  me: User
  users: [User]
  user(username: String!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addEvent(name: String!): Event
    removeEvent(eventId:ID!): User
    updateUser(username: String, email: String, password: String): User
  }
`;

module.exports = typeDefs;
