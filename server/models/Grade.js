const mongoose = require('mongoose');
const { Schema } = mongoose;

const gradeSchema = new Schema({
    lessonId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    lessonName: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true
    },
    // createdAt: {
    //     type: Date,
    //     default: Date.now,
    // }
});

module.exports = gradeSchema;