const mongoose = require('mongoose');
const { Schema } = mongoose;

const ChatRoomSchema = new Schema({
    roomName: {
        type: String,
        required: true,
        trim: true
    },
    users: {
        type: Schema.Types.Array,
        ref: 'User',
        required: true,
        messages: [{
            type: Schema.Types.String,
            ref: 'Message',
            required: false
        }]
    }
});

const ChatRoom = mongoose.model('ChatRoom', ChatRoomSchema);

module.exports = ChatRoom;