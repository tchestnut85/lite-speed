const mongoose = require('mongoose');

const { Schema } = mongoose;

const lessonSchema = new Schema({
    courseName: {
        type: Schema.Types.ObjectId,
        ref: 'Courses',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    intro: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 5.00
    }
});

module.exports = mongoose.model('Lesson', lessonSchema);