global.__dirbase = __dirname;
const express = require('express');
const app = express();
const port = 3000;
const apiDashoard = require('./routes/apiDashboard');

app.use('/apiBoard', apiDashoard);
app.get('/', function (req, res) {
  res.send('This is express server');
})

app.listen(port, function () {
  console.log(`Server is listening on port: ${port}`);
})