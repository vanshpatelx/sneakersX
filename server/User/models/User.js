const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    address: {
        street: String,
        city: String,
        state: String,
        postalCode: String,
        country: String,
    },
    contactInfo: {
        phone: String,
    }
})

module.exports = mongoose.model('User', userSchema);