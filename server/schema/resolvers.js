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

      // const lesson = await Lesson.findById(lesson._id).populate({
      //   path: 'courses.lessons',
      //   populate: 'lesson'
      // });
      return await Lesson.find(params).populate('courses');
    },

    // lessons: async (parent, { courseId }) => {
    //   const params = {};

    //   if (courseId) {
    //     params.courseId = courseId;
    //   }

    //   return await Lesson.find(params).populate('courseId');
    // },

    lesson: async (parent, { _id }, context) => {
      return await Lesson.findById(_id).populate('courses');
    },

    // lesson: async (parent, { _id }, context) => {
    //   if (context.courses) {
    //     const courses = await Courses.findById(context.courses._id).populate({
    //       path: 'lessons',
    //       populate: 'courses'
    //     });
    //     return await courses.lessons.id(_id);
    //   }
    // },

    users: async () => {
      return User.find().select('-__v -password');
    },

    me: async (parent, args, context) => {
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
        return await User.findByIdAndUpdate(
          { _id: context.user },
          { $set: { args } },
          { new: true }
        )
      };
      throw new AuthenticationError('Not logged in');
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
    }
  }
};

module.exports = resolvers;
