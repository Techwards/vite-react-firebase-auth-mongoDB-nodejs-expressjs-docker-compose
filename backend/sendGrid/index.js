const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendGrid = (
    function() {
        const sendEmail = (msg) => {

            // const msg = {
            //     to: 'test@example.com', // Change to your recipient
            //     from: 'test@example.com', // Change to your verified sender
            //     subject: 'Sending with SendGrid is Fun',
            //     text: 'and easy to do anywhere, even with Node.js',
            //     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
            // }
            // sgMail
            //     .send(msg)
            //     .then(() => {
            //         console.log('Email sent')
            //     })
            //     .catch((error) => {
            //         console.error(error)
            //     })
            return sgMail.send(msg)

        }
        return {
            sendEmail
        }
    }
)()

module.exports = sendGrid
