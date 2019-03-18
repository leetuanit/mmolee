const express = require('express');
const router = express.Router();
const boardController = require(__dirbase + '/controllers/boardController');
/* GET users listing. */
router.get('/',
  boardController.index
);

module.exports = router;
