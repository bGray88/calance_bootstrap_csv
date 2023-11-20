const express = require('express');
const router = express.Router();

const {
  displayForm,
  processInfo
} = require('../controllers/InfoController')

router.get('/displayForm', displayForm)
router.get('/processInfo', processInfo)

module.exports = router;
