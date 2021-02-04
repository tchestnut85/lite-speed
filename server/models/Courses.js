const mongoose = require('mongoose');
const { Schema } = mongoose;

const coursesSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  }
});

const Courses = mongoose.model('Courses', coursesSchema);

module.exports = Courses;
