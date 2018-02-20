// this is API for messages. 
//cos tu jest cos tu jest cos tu jest

const express = require('express')

const messageRepo = require('../lib/messages.repository')
const sendEmailService = require('../lib/sendEmail.service')




class MessagesController {

    constructor(router) {
        router.post('/messages', this.saveMessage.bind(this))
    }

    saveMessage(req, res) {
        sendEmailService.sendEmailToMe(req.body)

        messageRepo.saveNewMessageToDB(req.body)
        
        res.json({ status: true, error: null });
    } 
}


module.exports = MessagesController