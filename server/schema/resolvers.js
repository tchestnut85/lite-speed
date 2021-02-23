const { AuthenticationError } = require('apollo-server-express');
const { User, Courses, Lesson } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    courses: async () => {
      return await Courses.find();
    },

    lessons: async (parent, { courses, name }) => {
      const params = {};

      if (courses) {
        params.courses = courses;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Lesson.find(params).populate('courses');
    },

    lesson: async (parent, { _id }, context) => {
      return await Lesson.findById(_id).populate('courses');
    },

    users: async () => {
      return User.find().select('-__v -password');
    },

    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user });

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user });

        return user;
      }

      throw new AuthenticationError('Not logged in');
    }
  },

  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          args,
          { new: true }
        );
        return updatedUser;
      }
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    // changePassword: async (parent, args, context) => {
    //   const user = await User.findOneAndUpdate(
    //     { password: context.user.password },
    //     args,
    //     { new: true }
    //   );
    //   const token = signToken(user);

    //   return { token, user };
    // },

    saveCourses: async (parent, { courseId, courseTitle }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedCourses: { _id: courseId, title: courseTitle } } },
          { new: true }
        );
        return updatedUser;
      }
    },

    removeCourse: async (parent, { courseId }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { savedCourses: { _id: courseId } } },
          { new: true }
        );
        return updatedUser;
      }
    },

    saveGrade: async (parent, { lessonName, grade }, context) => {
      if (context.user) {
        const user = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { grades: { lessonName, grade } } },
          { new: true }
        );
        return user;
      }
    }
  }
};

module.exports = resolvers;
