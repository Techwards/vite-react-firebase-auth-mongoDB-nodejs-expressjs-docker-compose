const UserControllers = require('../controllers/userControllers')
const sendGrid = require('../sendGrid')

const authRoutes = (app) => {
    app.post('/current-user', UserControllers.currentUser)
    app.post('/send-email', async (req, res) => {
        const mes = {
            to: 'o.ahmedqureshi@gmail.com', // Change to your recipient
            from: 'owais.qureshi@techwards.co', // Change to your verified sender
            subject: 'Sending with SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        }
        try {
            const sent = await sendGrid.sendEmail(mes)
            res.json({
                message: 'yay',
                sent
            })
        } catch (error) {
            res.json({
                message: 'not sent',
                error
            })
        }
        
    })
} 
module.exports = authRoutes