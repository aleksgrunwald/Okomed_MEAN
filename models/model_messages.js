let mongoose = require('mongoose')
let Schema = mongoose.Schema

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

module.exports = mangoose.model('Message', messageSchema)


