let mongoose = require('mongoose')
let Schema = mongoose.Schema


function connectToDB() {
    mongoose.connect('mongodb://okomed:SoczewkiLublin@ds213118.mlab.com:13118/okomed')
    let db = mongoose.connection
    db.on('error', function() {
        console.log('Cannot connect to database')
    })
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


// function ola() {
//     console.log('hhhhhhhhhh')
// }


module.exports.connectToDB = connectToDB
module.exports = mongoose.model('Message', messageSchema)
// module.exports.ola = ola


