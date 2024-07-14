const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        default: 0
    },
    accountType: {
        type: String,
        required: true // This can be "savings", "checking", etc.
    },
    accountNumber: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('User', UserSchema);
