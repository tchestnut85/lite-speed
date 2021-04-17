import mongoose, { Schema } from 'mongoose';

const messageSchema = new Schema({
    content: String,
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    chatRoom: {
        type: Schema.Types.ObjectId,
        ref: 'ChatRoom'
    },
},
    {
        timestamps: true
    })

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;