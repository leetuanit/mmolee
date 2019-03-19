const express = require('express');
const router = express.Router();
const apiDashboardController = require(`${__dirbase}/app/controllers/apiDashboardController`);
router.get('/',
  apiDashboardController.index
);

module.exports = router;