const mongoose = require('mongoose')
const Schema = mongoose.Schema


function licz() {
    console.log('Cos ssssssssssss')
}


function openDB() {
    mongoose.connect('mongodb://okomed:SoczewkiLublin@ds213118.mlab.com:13118/okomed')

    let connection = mongoose.connection
    connection.on('error', console.error.bind(console, 'MongoDB Okomed connection error:'))
    connection.once('open', () => console.log('We have connected to mongodb Okomed!'))
}



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


module.exports.licz = licz
module.exports.openDB = openDB