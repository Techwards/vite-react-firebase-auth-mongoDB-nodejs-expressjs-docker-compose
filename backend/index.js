const express = require('express') 
const mongoose = require('mongoose')

const cors = require('cors')
require('dotenv').config({ path: './.env.local' })

const app = express()
app.use(cors())
app.use(express.json())

// services

// routes
const publicRoutes = require('./routes/publicRoutes')

// models
const userModel = require('./models/users')

// DB connection
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true}, function(error) {
    // Check error in initial connection. There is no 2nd param to the callback.
    if(error) {
        console.log('error: ', error);
    }
    // ready states being:
    // 0: disconnected
    // 1: connected
    // 2: connecting
    // 3: disconnecting
    console.log("mongoose.connection.readyState: ",mongoose.connection.readyState);
})

// schema models
userModel()

// auth0 middleware end

// protected routes 
// authRoutes(app)

// public routes
publicRoutes(app)


// async await can execute without esm  

// async function delayedLogger(...messages) {
//     return new Promise((resolve) => {
//         setImmediate(() => {
//             console.debug(...messages);
//             resolve(true);
//         });
//     });
// }

// async function doLogs() {
//     delayedLogger('2. Then I run next!');
//     console.log('1. I run first!');
//     await delayedLogger('3. Now I run third because I "await"');
//     console.log('4. And I run last!');
// }
// doLogs()

const port = process.env.PORT || 3200
app.listen(port, ()=>{
    console.log("server is listing on port: ", port)
})