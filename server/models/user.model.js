const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'The username is required']
    },
    password: {
        type: String,
        required: [true, 'The password is required']
    },
    role: {
        type: String,
        enum: ['USER', 'GOALKEEPER'],
        default: 'USER'
    },
    imageUrl: {
        type: String
    },
    state: {
        type: Boolean,
        default: false
    },
    favoritesGKs: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)
module.exports = User