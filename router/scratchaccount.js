const express = require('express');
const router = express.Router();
const Scratch = require('../models/Scratch');

router.post('/', async (req, res) => {
  const { username, password } = req.body;
  const scratchAccount = new Scratch({
    username: username,
    password: password,
  });
  try {
    const savedAccount = await scratchAccount.save();
    res.json(savedAccount);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
