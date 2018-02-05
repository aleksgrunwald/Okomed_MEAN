// This one make operations in db.
// insert a new message to db

const moment = require('moment')
const util = require('util')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Message = require('../models/message')

class MessagesRepository {

    saveNewMessageToDB(body) {

        let newMessage = new Message()

        console.log(moment.locale())
        newMessage.date = moment().format('L'),
        newMessage.time = moment().format('LTS'),
        newMessage.message = body.message,
        newMessage.userInfo = body.userInfo

        // console.log('Messages repository body: ' + newMessage)
       
        newMessage.save((err) => {
            if (err) {
                console.log('Posting to DB error on messages repository: ' + err)
            } else {
                console.log('OK messages repository: posting to DB ok')
            }
        })
    }

}

module.exports = new MessagesRepository()