const mongoose = require('mongoose');

const { Schema } = mongoose;

const lessonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    courseId: {
        type: Schema.Types.ObjectId,
        ref: 'Courses',
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

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;