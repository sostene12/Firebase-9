const express = require("express");
const auth = require("../firebase");
const { createUserWithEmailAndPassword,signInWithEmailAndPassword } = require("firebase/auth")
const router = express.Router()

router.post("/signup", async (req,res) =>{
    try {
        const {email,password} = req.body;
        const user = await createUserWithEmailAndPassword(auth,email,password);
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json({status:"fail", message:error.message})
    }
});

router.post("/login", async (req,res) =>{
    try {
        const { email,password } = req.body;
        const user = await signInWithEmailAndPassword(auth,email,password);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({status:"fail", message:error.message})
    }
});

module.exports = router;

