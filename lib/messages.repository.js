// This one make operations in db.

// insert a new message to db
const util = require('util')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Message = require('../models/message')

class MessagesRepository {

    saveNewMessageToDB(body) {
        let newMessage = new Message()
        console.log('Messages repository body: ' + util.inspect(body))

        newMessage.date = body.date,
        newMessage.time = body.time,
        newMessage.message = body.message,
        newMessage.userInfo = body.userInfo
       
        newMessage.save((err) => {
            if (err) {
                console.log('Posting to DB error on messages repository: ' + err)
            } else {
                console.log('OK; messages repository: posting to DB OK')
            }
        })
    }

}

module.exports = new MessagesRepository()