// this is API for messages. 

const express = require('express')

const messageRepo = require('../lib/messages.repository')
const sendEmailService = require('../lib/sendEmail.service')


class MessagesController {

    constructor(router) {
        router.post('/messages', this.saveMessage.bind(this))
    }

    saveMessage(req, res) {
        sendEmailService.sendEmailToMe(req.body, (err)=> {
            if (err) {
                console.log ('Email is NOT sent. ' + err)
            } else {
                console.log('OK. Email is sent')
            }})

        messageRepo.saveNewMessageToDB(req.body, (err)=> {
            if (err) {
                console.log ('Post error in messages controller')
            } else {
                console.log('OK messages controller: posting to messages repository OK')
            }
        })
        res.json({ status: true, error: null });
    } 
}


module.exports = MessagesController