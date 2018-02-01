// Root db connection

const mongoose = require('mongoose')
const Schema = mongoose.Schema



function openDB() {
    mongoose.connect('mongodb://okomed:SoczewkiLublin@ds213118.mlab.com:13118/okomed')

    let connection = mongoose.connection
    connection.on('error', console.error.bind(console, 'MongoDB Okomed connection error:'))
    connection.once('open', () => console.log('We have connected to mongodb Okomed!'))
}


module.exports.openDB = openDB

