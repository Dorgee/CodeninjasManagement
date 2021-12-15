const express = require('express');
const router = express.Router();
const Scratch = require('../models/Scratch');

// router.get('/all', async (req, res) => {
//   try {
//     const scratchAccounts = await Scratch.find();
//     //  console.log(posts);
//     // send back the posts as an json object
//     res.json(scratchAccounts);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// router.post('/', async (req, res) => {
//   const { username, password } = req.body;
//   const scratchAccount = new Scratch({
//     username: username,
//     password: password,
//   });
//   try {
//     const savedAccount = await scratchAccount.save();
//     res.json(savedAccount);
//   } catch (err) {
//     console.log(err);
//   }
// });

// find specific account
// router.get('/:accountId', async (req, res) => {
//   try {
//     const scratchAccount = await Scratch.findById(req.params.accountId);
//     res.json(scratchAccount);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });
// edit a sepcific account
router.patch('/:accountId', async (req, res) => {
  try {
    const updatedAccount = await Scratch.findByIdAndUpdate(
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
    const deletedAccount = await Scratch.findByIdAndDelete(id);
    res.json(deletedAccount);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
