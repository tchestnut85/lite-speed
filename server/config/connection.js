const mongoose = require('mongoose');

// mongoose.set('debug', true);


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/lite-speed', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
