const sgMail = require('@sendgrid/mail')



class sendEmailService {

    sendEmailToMe(messageForm) {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        
        const message = {
            to: 'koyotka@gmail.com',
            from: 'okomed@example.com',
            subject: 'Wiadomość z portalu - ' + messageForm.userInfo.name + ' ' + messageForm.userInfo.surname,
            text: messageForm.message,
            html: null
        }

        sgMail.send(message)
    }
}



module.exports = new sendEmailService()
