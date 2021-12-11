const express = require('express');
const router = express.Router();
const Roblox = require('../models/Roblox');

router.get('/all', async (req, res) => {
  try {
    const robloxAccounts = await Roblox.find();
    //  console.log(posts);
    // send back the posts as an json object
    res.json(robloxAccounts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/', async (req, res) => {
  const { username, password } = req.body;
  const robloxAccount = new Roblox({
    username: username,
    password: password,
  });
  try {
    const savedAccount = await robloxAccount.save();
    res.json(savedAccount);
  } catch (err) {
    console.log(err);
  }
});

// find specific account
router.get('/:accountId', async (req, res) => {
  try {
    const robloxAccount = await Roblox.findById(req.params.accountId);
    res.json(robloxAccount);
  } catch (err) {
    res.json({ message: err });
  }
});
// edit a sepcific account
router.patch('/:accountId', async (req, res) => {
  try {
    const updatedAccount = await Roblox.findByIdAndUpdate(
      req.params.accountId,
      req.body
    );
    res.json(updatedAccount);
  } catch (err) {
    console.log(err);
  }
});

// delete a specific account
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedAccount = await Roblox.findByIdAndDelete(id);
    res.json(deletedAccount);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
