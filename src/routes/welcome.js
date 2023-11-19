const express = require('express');
const router = express.Router();

const {
  indexRouting
} = require('../controllers/WelcomeController')

router.get('/', indexRouting)

module.exports = router;
