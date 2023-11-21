const express = require('express');
const router = express.Router();

const {
  displayForm,
  processForm,
  displayInfo,
  processInfo
} = require('../controllers/InfoController')

router.get('/displayForm', displayForm)
router.get('/processForm', processForm)
router.get('/displayInfo', displayInfo)
router.get('/processInfo', processInfo)

module.exports = router;
