const mongoose = require('mongoose')


let messageSchema = new Schema({
    date: String,
    time: String,
    message: String,
    userInfo: {
        name: String,
        surname: String,
        email: String,
        phone: Number
    }
})


module.exports = mongoose.model('Message', messageSchema)
