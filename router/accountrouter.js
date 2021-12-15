const express = require('express');
const router = express.Router();
const Account = require('../models/Account');
const Roblox = require('../models/Roblox');
const Scratch = require('../models/Scratch');
// route to get all acccounts
router.get('/all', async (req, res) => {
  try {
    const posts = await Account.find().populate('roblox').populate('scratch');
    //  console.log(posts);
    // send back the posts as an json object
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// add account to accounts table in database
router.post('/', async (req, res) => {
  const { username, firstName, lastName, description } = req.body;
  const account = new Account({
    username: username,
    firstName: firstName,
    lastName: lastName,
    description: description,
  });
  try {
    const savedAccount = await account.save();
    res.json(savedAccount);
  } catch (err) {
    console.log(err);
  }
});

// find specific account
router.get('/:accountId', async (req, res) => {
  try {
    const account = await Account.findById(req.params.accountId);
    res.json(account);
  } catch (err) {
    res.json({ message: err });
  }
});
// edit a sepcific account
router.patch('/:accountId', async (req, res) => {
  try {
    const updatedAccount = await Account.findByIdAndUpdate(
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
    const deletedAccount = await Account.findByIdAndDelete(id);
    res.json(deletedAccount);
  } catch (err) {
    console.log(err);
  }
});
// get account associated with specific roblox account
router.post('/:accountId/roblox', async (req, res) => {
  try {
    // console.log(req.params.accountId);
    const account = await Account.findById(req.params.accountId);
    const { username, password } = req.body;
    const robloxAccount = new Roblox({ username, password });
    // console.log(account);
    account.roblox.push(robloxAccount);
    await account.save();
    await robloxAccount.save();
    res.json(account);
  } catch (err) {
    console.log('oops something went wrong', err);
  }
});

// get account associated with specific scratch account
router.post('/:accountId/scratch', async (req, res) => {
  try {
    // console.log(req.params.accountId);
    const account = await Account.findById(req.params.accountId);
    const { username, password } = req.body;
    const scratchAccount = new Scratch({ username, password });
    // console.log(account);
    account.scratch.push(scratchAccount);
    await account.save();
    await scratchAccount.save();
    res.json(account);
  } catch (err) {
    console.log('oops something went wrong', err);
  }
});

module.exports = router;
