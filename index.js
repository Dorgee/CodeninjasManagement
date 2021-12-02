const account = require('./router/accountrouter.js');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const PORT = 4000;

app.use('/accounts', account);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

mongoose.connect('mongodb://localhost:27017/test');

mongoose.connection.on('error', (err) => {
  console.log('err', err);
});

mongoose.connection.on('connected', (err, res) => {
  console.log('mongoose is connected');
});
