const { AuthenticationError } = require("apollo-server-express");
const { User, Event } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    events: async () => {
      return Event.find();
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("events");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addEvent: async (parent, { name }, context) => {
      if (context.user) {
        const event = await Event.findOne({
          name,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { events: event._id } }
        );

        return event;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeEvent: async (parent, { eventId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: {
              events: eventId,
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateUser: async (_, { username, email, password }, context) => {
      if (context.user) {
        const updatedFields = {};

        if (username) {
          updatedFields.username = username;
        }

        if (email) {
          updatedFields.email = email;
        }

        if (password) {
          updatedFields.password = password;
        }

        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $set: updatedFields },
          { new: true }
        ).populate("events");

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
