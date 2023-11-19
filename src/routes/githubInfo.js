const express = require('express');
const router = express.Router();

const {
  getGithubInfo
} = require('../controllers/GitInfoController')

router.get('/getGithubInfo', getGithubInfo)

module.exports = router;
