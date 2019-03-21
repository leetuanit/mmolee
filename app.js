global.__dirbase = __dirname;
require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const apiDashoard = require('./routes/apiDashboard');

app.use(express.static('public'))
app.use('/apiBoard', apiDashoard);
app.get('/board/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/dashboard', 'index.html'));
});
app.get('/', function (req, res) {
  res.send('This is express server');
})
app.listen(port, function () {
  console.log(`Server is listening on port: ${port}`);
})