const mongoose = require('mongoose');
const { Schema } = mongoose;

const MessagesSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true,
        trim: true,
        minLength: 10
    }
});

const Message = mongoose.model('Message', MessagesSchema);

module.exports = Message;