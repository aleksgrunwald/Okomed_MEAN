const sgMail = require('@sendgrid/mail')



class sendEmailService {

    sendEmailToMe(messageForm) {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        let mail = {
            to: 'koyotka@gmail.com',
            from: messageForm.userInfo.email,
            subject: 'okomed.lublin.pl - ' + messageForm.userInfo.name + ' ' + messageForm.userInfo.surname,
            text: messageForm.message,
            html: messageForm.message,
        }
        
        sgMail.send(mail);
    }
}



module.exports = new sendEmailService()
