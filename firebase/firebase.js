const dotenv = require("dotenv");
const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");

dotenv.config();

const firebaseConfig = {
  apiKey:process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDERID,
  appId: process.env.APP_ID
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase)


module.exports = auth;