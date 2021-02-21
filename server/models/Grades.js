const mongoose = require('mongoose');
const { Schema } = mongoose;

const gradeSchema = new Schema({
    lessonId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    grade: {
        type: Number,
        required: true
    }
});

module.exports = gradeSchema;