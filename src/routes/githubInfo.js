const express = require('express');
const router = express.Router();

const {
  displayForm,
  displayInfo,
  processInfo
} = require('../controllers/InfoController')

router.get('/displayForm', displayForm)
router.get('/displayInfo', displayInfo)
router.get('/processInfo', processInfo)

module.exports = router;
