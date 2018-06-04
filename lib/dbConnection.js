// Root db connection

const mongoose = require('mongoose')
const Schema = mongoose.Schema



function openDB() {
    mongoose.Promise = global.Promise
    mongoose.connect(process.env.mLab_okomed_db)

    let connection = mongoose.connection
    connection.on('error', console.error.bind(console, 'MongoDB Okomed connection error:'))
    connection.once('open', () => console.log('We have connected to mongodb Okomed!'))
}


module.exports.openDB = openDB

