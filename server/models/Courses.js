const mongoose = require('mongoose');
// const lessonSchema = require('./Lesson');
const { Schema } = mongoose;

const coursesSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  // lessons: [lessonSchema]
});

const Courses = mongoose.model('Courses', coursesSchema);

module.exports = Courses;
