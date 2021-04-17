const mongoose = require('mongoose');
const { Schema } = mongoose;
const { User } = require('./User');

const ChatRoomSchema = new Schema({
    roomName: {
        type: String,
        required: true,
        trim: true
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    lastMessage: {
        type: Schema.Types.ObjectId,
        ref: 'Message'
    },
},
    {
        timestamps: true
    });

ChatRoomSchema.pre('save', async function () {
    if (!this.roomName) {
        const users = await User.where('_id').in(this.users).select('firstName')
        let roomName = users.map(user => user.firstName).join(', ')

        this.roomName = roomName;
    }
})

const ChatRoom = mongoose.model('ChatRoom', ChatRoomSchema);

module.exports = ChatRoom;