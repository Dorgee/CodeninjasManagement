const accountRoute = require('./router/accountrouter');
const robloxRouter = require('./router/robloxaccount');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

// connect local on computer
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/managementsystem');
  console.log('connected to datbase successfully');
}

app.use(bodyParser.json());

// routes
app.use('/account', accountRoute);
app.use('/roblox', robloxRouter);
// mongoose.connect('mongodb://localhost:27017/test');

// mongoose.connection.on('error', (err) => {
//   console.log('err', err);
// });

// mongoose.connection.on('connected', (err, res) => {
//   console.log('mongoose is connected');
// });
