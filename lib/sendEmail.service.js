const sgMail = require('@sendgrid/mail')



class sendEmailService {

    sendEmailToMe(messageForm) {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        console.log("SendGrid APIkey: " + process.env.SENDGRID_API_KEY)

        let mail = {
            to: 'koyotka@gmail.com',
            from: messageForm.userInfo.email,
            subject: 'okomed.lublin.pl - ' + messageForm.userInfo.name + ' ' + messageForm.userInfo.surname,
            text: messageForm.message,
            html: messageForm.message,
        }

        sgMail.send(mail, (err) => {
            if (err) {
                console.log('ERROR. Mail was not send. ' + err)
            } else {
                console.log('SENDING SUCCESS. Email was send successfully.')
            }
        }
        )
    }
}



module.exports = new sendEmailService()
