const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

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
  savedCourses: {
    type: Schema.Types.ObjectId,
    ref: 'Courses',
    required: true
  }
},
  {
    toJSON: {
      virtuals: true
    }
  }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.pre('findOneAndUpdate', async function () {
  const saltRounds = 10;
  this._update.password = await bcrypt.hash(this._update.password, saltRounds)
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  const isCorrect = await bcrypt.compare(password, this.password);
  return isCorrect;
};

userSchema.virtual('courseCount').get(function () {
  return this.savedCourses.length;
});

const User = mongoose.model('User', userSchema);

module.exports = User;
