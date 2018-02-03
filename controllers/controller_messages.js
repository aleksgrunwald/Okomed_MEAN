// this is API for messages. 
// This one takes request 
//   and then communicates with repository_messages.js

const express = require('express')

const messageRepo = require('../lib/messages.repository')
const sendEmailService = require('../lib/sendEmail.service')


class ControllerMessages {

    constructor(router) {
        router.post('/messages', this.saveMessage.bind(this))
    }

    saveMessage(req, res) {
        messageRepo.saveNewMessageToDB(req.body, (err)=> {
            if (err) {
                console.log ('Post error in messages controller')
            } else {
                console.log('OK; messages controller: posting to messages repository OK')
            }
        })
        sendEmailService.sendEmailToMe(req.body);
    } 
}


module.exports = ControllerMessages