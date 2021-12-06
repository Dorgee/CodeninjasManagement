const express = require('express');
const router = express.Router();
const Account = require('../models/Account');

// route to get all acccounts
router.get('/all', async (req, res) => {
  try {
    const posts = await Account.find();
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

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedAccount = await Account.findByIdAndDelete(id);
    res.json(deletedAccount);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
