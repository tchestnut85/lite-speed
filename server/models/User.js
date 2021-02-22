const mongoose = require('mongoose');
const gradeSchema = require('./Grade');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
// const Lesson = require('./Lesson');

// const Courses = require('./Courses');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  grades: [gradeSchema]
});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// userSchema.pre('findOneAndUpdate', async function () {
//   const saltRounds = 10;
//   this._update.password = await bcrypt.hash(this._update.password, saltRounds, function (err) {
//     if (err) {
//       console.error(err);
//     }
//   })
//   if (!this._update.password) {
//     return;
//   } else {
//     next()
//   }
// });

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  const isCorrect = await bcrypt.compare(password, this.password);
  return isCorrect;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
