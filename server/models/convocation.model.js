const mongoose = require('mongoose')
const Schema = mongoose.Schema

const convocationSchema = new Schema({
    localName: {
        type: String,
        required: [true, 'The local name is required']
    },
    location: {
        type: String,
        required: [true, 'The locations is required']
    },
    category: {
        type: String,
        enum: ['FUTSAL', 'FOOTBALL 7', 'FOOTBALL 11'],
        required: [true, 'The category is required']
    },
    matchDate: {
        type: Date,
        required: [true, 'The match date is required']
    },
    matchDuration: {
        type: Number,
        required: [true, 'The match duration is required']
    },
    numberOfGks: {
        type: Number
    },
    goalkeeper: {
        type: mongoose.Types.ObjectId,
        ref: 'Goalkeeper'
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})

const Convocation = mongoose.model('Convocation', convocationSchema)
module.exports = Convocation