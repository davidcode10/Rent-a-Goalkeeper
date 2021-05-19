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
        enum: ['FUTSAL', 'FOOTBALL 7', 'FOOTBALL 11']
    },
    matchDate: {
        type: Date
    },
    matchDuration: {
        type: Number,
        required: [true, 'The match duration is required']
    },
    numberOfGks: {
        type: Number,
        max: 2
    },
    state: {
        type: Boolean,
        default: false
    },
    goalkeeper: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        max: 2
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})

const Convocation = mongoose.model('Convocation', convocationSchema)
module.exports = Convocation