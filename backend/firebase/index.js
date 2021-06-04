
const firebaseAdmin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount)
});

module.exports = firebaseAdmin
