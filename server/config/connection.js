const mongoose = require('mongoose');

<<<<<<< HEAD
=======
// mongoose.set('debug', true);

>>>>>>> develop
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/lite-speed', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
